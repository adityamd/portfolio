const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://adityasportfolioadmin-368b40b5c9fe.herokuapp.com/',
      changeOrigin: true,
    })
  );
};