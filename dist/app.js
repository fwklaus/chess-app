"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../lib/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
let store = require('connect-loki');
let pieces = require('./lib/pieces');
let routes = require('./lib/routes');
const app = (0, express_1.default)();
const host = config.HOST;
const port = config.PORT;
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
// to run tests, comment out the app.listen call following the export 
exports.default = app;
// app.listen(port, () => {
//   console.log(`⚡ Listening on ${host}:${port}`);
// });
