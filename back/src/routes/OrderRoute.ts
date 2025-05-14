import { Application } from "express";
import { OrderController } from "../controllers/OrderController";
import { OrderProductController } from "../controllers/OrderProductController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

export class OrderRoute {
  static init = (app: Application) => {
    app.post(
      "/orders",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderController.create,
    );

    app.patch("/orders/:id", authMiddleware, OrderController.update);

    app.delete(
      "/orders/:id",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderController.destroy,
    );

    app.get("/orders/:id", authMiddleware, OrderController.get);

    app.get(
      "/orders",
      roleMiddleware(["deliver", "admin"]),
      authMiddleware,
      OrderController.getAll,
    );

    // Order products
    app.post(
      "/orders/:orderId/products",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderProductController.create,
    );

    app.patch(
      "/orders/:orderId/products/:productId",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderProductController.update,
    );

    app.delete(
      "/orders/:orderId/products/:productId",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderProductController.destroy,
    );

    app.get(
      "/orders/:orderId/products/:productId",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderProductController.get,
    );

    app.get(
      "/orders/:orderId/products",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderProductController.getAll,
    );
  };
}
