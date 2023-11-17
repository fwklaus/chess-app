import express, { Express, Request, Response} from 'express';
const router = express.Router();

declare module 'express-session' {
  interface SessionData {
          time: string;
      }
}

router.get("/" , (req: Request, res: Response) => {
  res.redirect("/home");
});

router.get("/home", (req: Request, res: Response) => {
  req.session.time ||="6:00";
  res.locals.time = req.session.time;
  res.render("main", res.locals);
});

router.get("/settings", (req: Request, res: Response) => {
  res.render("settings");
});

router.post("/settings", (req: Request, res: Response) => {
  let {time, theme, language} = req.body;

  
  // set the time for req.session and req.locals if time has been changed
  res.set('Content-Type', 'application/json');

  req.session.time = time;
  res.redirect("/home");
});

module.exports = router;
