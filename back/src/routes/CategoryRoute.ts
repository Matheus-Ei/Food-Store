import { Application } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class CategoryRoute {
  static init = (app: Application) => {
    app.post("/categories", authMiddleware, CategoryController.create);

    app.patch("/categories/:id", authMiddleware, CategoryController.update);

    app.delete("/categories/:id", authMiddleware, CategoryController.destroy);

    app.get("/categories/:id", CategoryController.get);

    app.get("/categories", CategoryController.getAll);
  };
}
