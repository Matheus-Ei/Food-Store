import { Application } from "express";
import { PaymentController } from "../controllers/PaymentController";

export class PaymentRoute {
  static init = (app: Application) => {
    app.post("/payments", PaymentController.create);
    app.patch("/payments/:id", PaymentController.update);
    app.delete("/payments/:id", PaymentController.destroy);
    app.get("/payments/:id", PaymentController.get);
    app.get("/payments", PaymentController.getAll);
  };
}
