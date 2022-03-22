// import { createProxyMiddleware, RequestHandler } from "http-proxy-middleware";

// export default function (app: Use): void {
//   app.use(
//     createProxyMiddleware("/", {
//       target: "https://localhost:443",
//       changeOrigin: true,
//     })
//   );
// }

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/members",
    createProxyMiddleware({
      target: "https://localhost:443/",
      changeOrigin: true,
      secure: false,
      pathRewrite: { "^/members": "/api/members" },
    })
  );
};
