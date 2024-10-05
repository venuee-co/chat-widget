import chatWidget from '../src/chatWidget.min.js';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname !== '/chat-widget.js') {
    return new Response('Not Found', { status: 404 });
  }

  const script = chatWidget.toString()

  return new Response(script, {
    headers: {
      'content-type': 'application/javascript',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}