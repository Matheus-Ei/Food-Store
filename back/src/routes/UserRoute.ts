import { Application } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class UserRoute {
  static init = (app: Application) => {
    app.post("/users", UserController.create);
    app.post("/users/auth", UserController.login);

    app.patch("/users/:userId", authMiddleware, UserController.update);

    app.delete("/users/:userId", authMiddleware, UserController.destroy);

    app.get("/users/:userId", authMiddleware, UserController.get);

  };
}
