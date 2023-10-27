"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
let store = require('connect-loki');
// import dotenv from 'dotenv';
// dotenv.config();
module.exports.failure = undefined;
const app = (0, express_1.default)();
const host = 'localhost';
// const port = process.env.PORT;
const port = 8000;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('public'));
app.use((0, morgan_1.default)("common"));
app.get('/', (req, res) => {
    res.redirect("/home");
});
app.get('/home', (req, res) => {
    res.render("main");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://${host}:${port}`);
});
