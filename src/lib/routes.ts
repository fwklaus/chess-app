import express, { Express, Request, Response} from 'express';

let routes =  {
  root(req: Request, res: Response) {
    res.redirect("/home");
  },

  home(req: Request, res: Response) {
    res.render("main");
  }
}

module.exports = routes;
