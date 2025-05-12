import { Application } from "express";
import { CategoryController } from "../controllers/CategoryController";

export class CategoryRoute {
  static init = (app: Application) => {
    app.post("/categories", CategoryController.create);
    app.patch("/categories/:id", CategoryController.update);
    app.delete("/categories/:id", CategoryController.destroy);
    app.get("/categories/:id", CategoryController.get);
    app.get("/categories", CategoryController.getAll);
  };
}
