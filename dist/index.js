"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const page_1 = require("./src/page");
const user_1 = require("./src/user");
const post_1 = require("./src/post");
const container_1 = __importDefault(require("./config/container"));
const app = (0, express_1.default)();
const pageClass = container_1.default.get(page_1.Page);
app.get("/", (req, res) => {
    res.send("<h2> This is the home route</h2>");
});
app.post("/create-page", (req, res) => {
    let post = pageClass.createPage("http/my-page.com");
    res.json(post);
});
app.post("/create-post", (req, res) => {
    let post = new post_1.Post("title of the post", "Content of the post", new user_1.User("Johan"));
    res.send("Post is created!!");
});
app.listen(3000, () => {
    console.log("Listen on askdjsaljdk3000");
});
