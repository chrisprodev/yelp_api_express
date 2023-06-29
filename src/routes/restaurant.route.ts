import { Router } from "express";
import {
  getCategories,
  getRestaurants,
} from "@/controllers/restaurant.controller";

const router = Router();

router.route("/restaurants/:category/:page").get(getRestaurants);
router.route("/categories").get(getCategories);

export default router;
