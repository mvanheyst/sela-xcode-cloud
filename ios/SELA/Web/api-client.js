// Same client works in the browser and the bundled WKWebView. Keys stay on the server.
function abortable(operation, signal) {
  if (!signal) return operation();
  if (signal.aborted) return Promise.reject(new DOMException('Aborted', 'AbortError'));
  return new Promise((resolve, reject) => {
    const abort = () => reject(new DOMException('Aborted', 'AbortError'));
    signal.addEventListener('abort', abort, { once: true });
    Promise.resolve().then(operation).then(resolve, reject).finally(() => {
      signal.removeEventListener('abort', abort);
    });
  });
}

async function performRequest(path, options = {}) {
  const bridge = globalThis.webkit?.messageHandlers?.sela;
  let data, status;
  if (bridge) {
    const result = await abortable(() => bridge.postMessage({
      action: 'request', path, method: options.method || 'GET', body: options.body || null
    }), options.signal);
    ({ data, status } = result);
  } else {
    const response = await fetch(path, options);
    status = response.status;
    data = await response.json().catch(() => ({}));
  }
  if (options.signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  if (status < 200 || status >= 300) throw Object.assign(new Error(data?.error || `Request failed (${status})`), {
    status, code:data?.code||'service-error', retryAfter:data?.retryAfter||0,
    retryable:!!data?.retryable, retriesExhausted:!!data?.retriesExhausted
  });
  return data;
}

export async function requestJSON(path, options = {}) {
  const controller=new AbortController();let timedOut=false;
  const abort=()=>controller.abort();
  if(options.signal?.aborted)abort();
  else options.signal?.addEventListener('abort',abort,{once:true});
  const timer=setTimeout(()=>{timedOut=true;controller.abort();},(path==='/api/study'||path.startsWith('/api/original?'))?80000:35000);
  try {
    return await abortable(()=>performRequest(path,{...options,signal:controller.signal}),controller.signal);
  } catch(error) {
    if(timedOut)throw Object.assign(new Error('The study server took too long to respond. Please try again.'),{code:'timeout',retryable:true});
    throw error;
  } finally {clearTimeout(timer);options.signal?.removeEventListener('abort',abort);}
}

export async function copyText(text) {
  const bridge = globalThis.webkit?.messageHandlers?.sela;
  if (bridge) await bridge.postMessage({ action: 'copy', text });
  else await navigator.clipboard.writeText(text);
}
