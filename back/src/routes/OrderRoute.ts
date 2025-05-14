import { Application } from "express";
import { OrderController } from "../controllers/OrderController";
import { OrderProductController } from "../controllers/OrderProductController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

export class OrderRoute {
  static init = (app: Application) => {
    app.post(
      "/orders",
      roleMiddleware(["admin", "client"]),
      authMiddleware,
      OrderController.create,
    );

    app.patch("/orders/:id", authMiddleware, OrderController.update);

    app.delete(
      "/orders/:id",
      roleMiddleware(["admin", "client"]),
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
      roleMiddleware(["admin", "client"]),
      authMiddleware,
      OrderProductController.create,
    );

    app.patch(
      "/orders/:orderId/products/:productId",
      roleMiddleware(["admin", "client"]),
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
      "/orders/:orderId/products",
      roleMiddleware(["admin"]),
      authMiddleware,
      OrderProductController.getAll,
    );
  };
}
