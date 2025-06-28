const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/registration'],
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
      secure: false,
      onProxyReq: (proxyReq) => {
        console.log('Проксируем запрос на:', proxyReq.path);
      }
    })
  );
};