"use strict";
const app = require('../app.ts');
const config = require("./config");
const port = config.PORT;
const host = config.HOST;
const server = app.listen(port, () => console.log(`Listening on ${host}:${port}`));
module.exports = server;
