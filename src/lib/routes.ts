import express, { Express, Request, Response} from 'express';
import { resourceLimits } from 'worker_threads';

declare module 'express-session' {
  interface SessionData {
          time: string;
      }
}

let routes =  {
  root(req: Request, res: Response) {
    res.redirect("/home");
  },

  home(req: Request, res: Response) {
    req.session.time ||="6:00";
    res.locals.time = req.session.time;
    res.render("main", res.locals);
  },

  settings(req: Request, res: Response) {
    res.render("settings");
  },

  changeSettings(req: Request, res: Response) {
    let {time, theme, language} = req.body;
    // change the theme if the time has been changed
    // change the language if the language has been changed
    
    // set the time for req.session and req.locals if time has been changed
    req.session.time = time;
    res.redirect("/home");
  }
}

module.exports = routes;
