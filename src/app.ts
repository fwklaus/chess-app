import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const host = 'localhost';
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'));
app.use(morgan("common"));

app.get('/', (req: Request, res: Response) => {
  res.render("main");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://${host}:${port}`);
});