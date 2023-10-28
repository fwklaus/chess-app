import app from '../dist/app.js';
const config = require("../lib/config")
const port = config.PORT;
const host = config.HOST;

app.listen(port, () => console.log(`Listening on ${host}:${port}`));
