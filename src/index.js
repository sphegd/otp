// src/index.js
addEventListener('fetch', event => {
  event.respondWith(new Response('Hello from OTP Worker!', { status: 200 }));
});