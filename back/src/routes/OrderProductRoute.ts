import { Application } from "express";
import { OrderProductController } from "../controllers/OrderProductController";

export class OrderProductRoute {
  static init = (app: Application) => {
    app.post("/order-products", OrderProductController.create);
    app.patch("/order-products/:id", OrderProductController.update);
    app.delete("/order-products/:id", OrderProductController.destroy);
    app.get("/order-products/:id", OrderProductController.get);
    app.get("/order-products", OrderProductController.getAll);
  };
}
