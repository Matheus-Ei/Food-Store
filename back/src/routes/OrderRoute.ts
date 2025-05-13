import { Application } from "express";
import { OrderController } from "../controllers/OrderController";
import { OrderProductController } from "../controllers/OrderProductController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class OrderRoute {
  static init = (app: Application) => {
    app.post("/orders", authMiddleware, OrderController.create);

    app.patch("/orders/:id", authMiddleware, OrderController.update);

    app.delete("/orders/:id", authMiddleware, OrderController.destroy);

    app.get("/orders/:id", authMiddleware, OrderController.get);

    app.get("/orders", authMiddleware, OrderController.getAll);

    // Order products
    app.post("/orders/:orderId/products", authMiddleware, OrderProductController.create);

    app.patch(
      "/orders/:orderId/products/:productId",
      authMiddleware,
      OrderProductController.update,
    );

    app.delete(
      "/orders/:orderId/products/:productId",
      authMiddleware,
      OrderProductController.destroy,
    );

    app.get("/orders/:orderId/products/:productId", authMiddleware, OrderProductController.get);

    app.get("/orders/:orderId/products", authMiddleware, OrderProductController.getAll);
  };
}
