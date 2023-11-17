import express, { Express, Request, Response} from 'express';
import morgan from 'morgan';
const session = require("express-session");
let store = require('connect-loki');
let LokiStore = store(session);
let router = require('./routes/api');
const app: Express = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan("common"));

app.use(session({
  cookie: {
    httpOnly: false,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "chess-app",
  // store: new LokiStore(),
  secret: "super-secret",
  resave: false,
  saveUninitialized: true,
}));

app.use("/", router)

module.exports = app;
