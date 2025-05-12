import { Application } from "express";
import { OrderController } from "../controllers/OrderController";

export class OrderRoute {
  static init = (app: Application) => {
    app.post("/categories", OrderController.create);
    app.patch("/categories/:id", OrderController.update);
    app.delete("/categories/:id", OrderController.destroy);
    app.get("/categories/:id", OrderController.get);
    app.get("/categories", OrderController.getAll);
  };
}
