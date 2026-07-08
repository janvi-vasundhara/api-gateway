const { createProxyMiddleware } = require("http-proxy-middleware");

const authProxy = createProxyMiddleware({
    target: process.env.AUTH_SERVICE,
    changeOrigin: true,
});

const productProxy = createProxyMiddleware({
    target: process.env.PRODUCT_SERVICE,
    changeOrigin: true,
});

const orderProxy = createProxyMiddleware({
    target: process.env.ORDER_SERVICE,
    changeOrigin: true,
});

module.exports = {
    authProxy,
    productProxy,
    orderProxy,
};