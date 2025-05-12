import { Application } from "express";
import { UserController } from "../controllers/UserController";

export class UserRoute {
  static init = (app: Application) => {
    app.post("/categories", UserController.create);
    app.patch("/categories/:id", UserController.update);
    app.delete("/categories/:id", UserController.destroy);
    app.get("/categories/:id", UserController.get);
    app.get("/categories", UserController.getAll);
  };
}
