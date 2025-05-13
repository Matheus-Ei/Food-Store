import { Application } from "express";
import { ProductController } from "../controllers/ProductController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class ProductRoute {
  static init = (app: Application) => {
    app.post("/product", authMiddleware, ProductController.create);

    app.patch("/product/:id", authMiddleware, ProductController.update);

    app.delete("/product/:id", authMiddleware, ProductController.destroy);

    app.get("/product/:id", ProductController.get);

    app.get("/product", ProductController.getAll);
  };
}
