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
    }
};
module.exports = routes;
