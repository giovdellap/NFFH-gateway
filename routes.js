const { ROUTES_DEBUG } = require("./debug-routes");
const { ROUTES_AUTH } = require("./routes-auth");
const { ROUTES_CLIENT } = require("./routes-client");
const { ROUTES_FARMER } = require("./routes-farmer");
const { ROUTES_IMAGE } = require("./routes-image");

const ROUTES = [
    ...ROUTES_AUTH,
    //...ROUTES_DEBUG,
    ...ROUTES_CLIENT,
    ...ROUTES_FARMER,
    ...ROUTES_IMAGE
]

exports.ROUTES = ROUTES;