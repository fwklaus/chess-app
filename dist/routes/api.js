"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.redirect("/home");
});
router.get("/home", (req, res) => {
    var _a;
    (_a = req.session).time || (_a.time = "6:00");
    res.locals.time = req.session.time;
    res.render("main", res.locals);
});
router.get("/settings", (req, res) => {
    res.render("settings");
});
router.post("/settings", (req, res) => {
    let { time, theme, language } = req.body;
    // set the time for req.session and req.locals if time has been changed
    res.set('Content-Type', 'application/json');
    req.session.time = time;
    res.redirect("/home");
});
module.exports = router;
