"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("module-alias/register");
const app_1 = __importDefault(require("./app"));
const restaurant_route_1 = __importDefault(require("@/routes/restaurant.route"));
const port = Number(process.env.PORT) || 3000;
const app = new app_1.default(port, [restaurant_route_1.default]);
app.listen();
