import "dotenv/config";
import "module-alias/register";
import App from "./app";
import restaurantRoutes from "@/routes/restaurant.route";

const port: number = Number(process.env.PORT) || 3000;

const app = new App(port, [restaurantRoutes]);

app.listen();
