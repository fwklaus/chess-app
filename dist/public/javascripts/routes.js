"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let routes = {
    root(req, res) {
        res.redirect("/home");
    },
    home(req, res) {
        var _a;
        (_a = req.session).time || (_a.time = "6:00");
        res.locals.time = req.session.time;
        res.render("main", res.locals);
    },
    settings(req, res) {
        res.render("settings");
    },
    changeSettings(req, res) {
        let { time, theme, language } = req.body;
        // change the theme if the time has been changed
        // change the language if the language has been changed
        // set the time for req.session and req.locals if time has been changed
        req.session.time = time;
        res.redirect("/home");
    }
};
module.exports = routes;
