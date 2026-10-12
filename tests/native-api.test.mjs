import test from 'node:test';
import assert from 'node:assert/strict';
import { requestJSON, copyText } from '../ios/SELA/Web/api-client.js';

test('native bridge transmits a verse request and copies without a browser clipboard', async () => {
  const messages = [];
  globalThis.webkit = { messageHandlers: { sela: { postMessage: async payload => {
    messages.push(payload);
    return {status: 200, data: {reference: '2 Peter 3:10'}};
  }}}};
  try {
    const data = await requestJSON('/api/study', {method: 'POST', body: JSON.stringify({book:'2 Peter',chapter:3,verse:10})});
    assert.equal(data.reference, '2 Peter 3:10');
    assert.equal(messages[0].action, 'request');
    assert.equal(JSON.parse(messages[0].body).verse, 10);
    await copyText('2 Peter 3:10');
    assert.deepEqual(messages[1], {action: 'copy', text: '2 Peter 3:10'});
  } finally { delete globalThis.webkit; }
});

test('native errors are surfaced instead of mistaken for successful studies', async () => {
  globalThis.webkit = { messageHandlers: { sela: { postMessage: async () => ({status:409,data:{error:'AI is disabled'}}) }}};
  try { await assert.rejects(requestJSON('/api/study'), /AI is disabled/); }
  finally { delete globalThis.webkit; }
});

test('aborted chapter navigation rejects promptly and discards late native replies', async () => {
  let complete;
  globalThis.webkit = { messageHandlers: { sela: { postMessage: () => new Promise(resolve => { complete = resolve; }) }}};
  try {
    const controller = new AbortController();
    const pending = requestJSON('/api/chapter?book=John&chapter=3', {signal: controller.signal});
    await Promise.resolve();
    controller.abort();
    await assert.rejects(pending, {name: 'AbortError'});
    complete({status:200,data:{verses:[]}});
    const already = new AbortController(); already.abort();
    await assert.rejects(requestJSON('/api/books', {signal:already.signal}), {name:'AbortError'});
  } finally { delete globalThis.webkit; }
});

test('web fallback preserves HTTP request options and error messages', async () => {
  const original = globalThis.fetch;
  const options = {method:'POST', body:'{}'};
  globalThis.fetch = async (path, passed) => {
    assert.equal(path, '/api/study'); assert.equal(passed, options);
    return {status:429, json:async () => ({error:'Try again shortly'})};
  };
  try { await assert.rejects(requestJSON('/api/study', options), /Try again shortly/); }
  finally { globalThis.fetch = original; }
});
