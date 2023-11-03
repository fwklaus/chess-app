const config = require("./lib/config")
let routes = require('./lib/routes');
import express, { Express, Request, Response} from 'express';
import morgan from 'morgan';
// import session from "express-session";
// let store = require('connect-loki');

const app: Express = express();
const host: string = config.HOST;
const port: string = config.PORT

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan("common"));

app.get('/', routes.root);
app.get('/home', routes.home);

// to run tests on endpoints, comment out the app.listen call following the export
module.exports = app;

app.listen(port, () => {
  console.log(`⚡ Listening on ${host}:${port}`);
});
