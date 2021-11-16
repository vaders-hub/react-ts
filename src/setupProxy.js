const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/bbs",
    createProxyMiddleware({
      target: "https://localhost:443",
      changeOrigin: true,
    })
  );
};
