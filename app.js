"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("./lib/config");
let routes = require('./lib/routes');
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const session = require("express-session");
let store = require('connect-loki');
let LokiStore = store(session);
const app = (0, express_1.default)();
const host = config.HOST;
const port = config.PORT;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('public'));
app.use((0, morgan_1.default)("common"));
app.use(session({
    cookie: {
        httpOnly: false,
        maxAge: 31 * 24 * 60 * 60 * 1000,
        path: "/",
        secure: false,
    },
    name: "chess-app",
    store: new LokiStore(),
    secret: "super-secret",
    resave: false,
    saveUninitialized: true,
}));
// get routes
app.get('/', routes.root);
app.get('/home', routes.home);
app.get('/settings', routes.settings);
// post routes
app.post('settings', routes.changeSettings);
// to run tests on endpoints (app.test.ts), comment out the app.listen call following the export
module.exports = app;
app.listen(port, () => {
    console.log(`⚡ Listening on ${host}:${port}`);
});
