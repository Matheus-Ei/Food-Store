import { Application } from "express";
import { OrderController } from "../controllers/OrderController";

export class OrderRoute {
  static init = (app: Application) => {
    app.post("/orders", OrderController.create);
    app.patch("/orders/:id", OrderController.update);
    app.delete("/orders/:id", OrderController.destroy);
    app.get("/orders/:id", OrderController.get);
    app.get("/orders", OrderController.getAll);
  };
}
