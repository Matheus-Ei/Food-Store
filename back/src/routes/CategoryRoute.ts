import { Application } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import { ProductController } from "../controllers/ProductController";

export class CategoryRoute {
  static init = (app: Application) => {
    app.post(
      "/categories",
      roleMiddleware(["admin"]),
      authMiddleware,
      CategoryController.create,
    );

    app.patch(
      "/categories/:id",
      roleMiddleware(["admin"]),
      authMiddleware,
      CategoryController.update,
    );

    app.delete(
      "/categories/:id",
      roleMiddleware(["admin"]),
      authMiddleware,
      CategoryController.destroy,
    );

    app.get("/categories/:id", CategoryController.get);

    app.get(
      "/categories/:categoryId/products",
      ProductController.getByCategory,
    );

    app.get("/categories", CategoryController.getAll);
  };
}
