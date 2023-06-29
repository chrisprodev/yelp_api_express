"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_controller_1 = require("@/controllers/restaurant.controller");
const router = (0, express_1.Router)();
router.route("/restaurants/:category/:page").get(restaurant_controller_1.getRestaurants);
router.route("/categories").get(restaurant_controller_1.getCategories);
exports.default = router;
