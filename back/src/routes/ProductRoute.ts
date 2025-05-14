import { Application } from "express";
import { ProductController } from "../controllers/ProductController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

export class ProductRoute {
  static init = (app: Application) => {
    app.post(
      "/products",
      roleMiddleware(["admin"]),
      authMiddleware,
      ProductController.create,
    );

    app.patch(
      "/products/:id",
      roleMiddleware(["admin"]),
      authMiddleware,
      ProductController.update,
    );

    app.delete(
      "/products/:id",
      roleMiddleware(["admin"]),
      authMiddleware,
      ProductController.destroy,
    );

    app.get("/products/:id", ProductController.get);

    app.get("/products", ProductController.getAll);
  };
}
