"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let routes = {
    root(req, res) {
        res.redirect("/home");
    },
    home(req, res) {
        res.render("main");
    }
};
module.exports = routes;
