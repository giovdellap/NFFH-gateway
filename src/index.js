import express from 'express';

import {ROUTES_AUTH, ROUTES_CLIENT, ROUTES_FARMER, ROUTES_IMAGE} from "./routes.js";

import {setupProxies} from "./proxy.js";
import {default as RoutesBuilder} from './RoutesBuilder.js';
import { AUTH, CLIENT_BE, FARMER_BE, IMAGE } from './conf.js';

const app = express();
const port = 8080;
const builder = new RoutesBuilder()

builder.addRoutes(ROUTES_AUTH, AUTH);
builder.addRoutes(ROUTES_CLIENT, CLIENT_BE);
builder.addRoutes(ROUTES_FARMER, FARMER_BE)
builder.addRoutes(ROUTES_IMAGE, IMAGE)

setupProxies(app, builder.exposeRoutes());


app.listen(port, () => {
    console.log(`NFFH Gateway listening at http://0.0.0.0:${port}`)
})