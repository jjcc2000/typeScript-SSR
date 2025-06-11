"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const user_1 = require("../src/user");
const page_1 = require("../src/page");
const container = new inversify_1.Container();
container.bind(user_1.User).toSelf();
container.bind(page_1.Page).toSelf();
exports.default = container;
