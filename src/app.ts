const config = require("./lib/config")
let routes = require('./lib/routes');
import express, { Express, Request, Response} from 'express';
import morgan from 'morgan';
const session = require("express-session");
let store = require('connect-loki');
let LokiStore = store(session);

const app: Express = express();
const host: string = config.HOST;
const port: string = config.PORT

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
