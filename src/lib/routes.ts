import express, { Express, Request, Response} from 'express';

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
    req.session.time ||= "6:00";
    res.locals.time = req.session.time;

    res.render("main", res.locals);
  },

  settings(req: Request, res: Response) {
    res.render("settings");
  },

  changeSettings(req: Request, res: Response) {
     
    
  }
}

module.exports = routes;
