import { Application } from "express";
import { PaymentController } from "../controllers/PaymentController";

export class PaymentRoute {
  static init = (app: Application) => {
    app.post("/categories", PaymentController.create);
    app.patch("/categories/:id", PaymentController.update);
    app.delete("/categories/:id", PaymentController.destroy);
    app.get("/categories/:id", PaymentController.get);
    app.get("/categories", PaymentController.getAll);
  };
}
