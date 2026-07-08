const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const {
    authProxy,
    productProxy,
    orderProxy,
} = require("./config/proxy");

const app = express();
app.use(require("./middlewares/error.middleware"));

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));
app.use("/api/auth", authProxy);

app.use("/api/products", productProxy);

app.use("/api/orders", orderProxy);
app.get("/health", (req, res) => {
    res.json({
        success: true,
        service: "API Gateway",
    });
});
module.exports = app;