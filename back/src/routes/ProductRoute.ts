import { Application } from "express";
import { ProductController } from "../controllers/ProductController";

export class ProductRoute {
  static init = (app: Application) => {
    app.post("/product", ProductController.create);
    app.patch("/product/:id", ProductController.update);
    app.delete("/product/:id", ProductController.destroy);
    app.get("/product/:id", ProductController.get);
    app.get("/product", ProductController.getAll);
  };
}
