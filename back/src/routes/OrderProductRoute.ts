import { Application } from "express";
import { OrderProductController } from "../controllers/OrderProductController";

export class OrderProductRoute {
  static init = (app: Application) => {
    app.post("/categories", OrderProductController.create);
    app.patch("/categories/:id", OrderProductController.update);
    app.delete("/categories/:id", OrderProductController.destroy);
    app.get("/categories/:id", OrderProductController.get);
    app.get("/categories", OrderProductController.getAll);
  };
}
