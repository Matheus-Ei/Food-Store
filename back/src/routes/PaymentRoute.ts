import { Application } from "express";
import { PaymentController } from "../controllers/PaymentController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class PaymentRoute {
  static init = (app: Application) => {
    app.post("/payments", authMiddleware, PaymentController.create);

    app.patch("/payments/:id", authMiddleware, PaymentController.update);

    app.delete("/payments/:id", authMiddleware, PaymentController.destroy);

    app.get("/payments/:id", authMiddleware, PaymentController.get);

    app.get("/payments", authMiddleware, PaymentController.getAll);
  };
}
