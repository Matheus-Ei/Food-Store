import { Application } from "express";
import { UserController } from "../controllers/UserController";

export class UserRoute {
  static init = (app: Application) => {
    app.post("/users", UserController.create);
    app.patch("/users/:id", UserController.update);
    app.delete("/users/:id", UserController.destroy);
    app.get("/users/:id", UserController.get);
    app.get("/users", UserController.getAll);
  };
}
