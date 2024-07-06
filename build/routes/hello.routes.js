"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helloRouter = (0, express_1.Router)();
// Define route paths
helloRouter.get("/", (req, res) => {
    return res.json({ "data": "server is live " });
});
exports.default = helloRouter;
