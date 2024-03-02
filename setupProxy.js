const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://omnifoodbackend.cyclic.app/", // The backend server URL
      changeOrigin: true,
    })
  );
};
