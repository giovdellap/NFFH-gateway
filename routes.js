const { ROUTES_AUTH } = require("./routes-auth");
const { ROUTES_CLIENT } = require("./routes-client");
const { ROUTES_FARMER } = require("./routes-farmer");

const ROUTES = [
    ...ROUTES_AUTH,
    ...ROUTES_CLIENT,
    ...ROUTES_FARMER

]

exports.ROUTES = ROUTES;