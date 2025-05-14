import { Application } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import { AddressController } from "../controllers/AddressController";

export class UserRoute {
  static init = (app: Application) => {
    app.post("/users", UserController.create);
    app.post("/users/auth", UserController.login);

    app.patch("/users/:userId", authMiddleware, UserController.update);

    app.delete("/users/:userId", authMiddleware, UserController.destroy);

    app.get("/users/:userId", authMiddleware, UserController.get);

    app.get(
      "/users/:userId/addresses",
      roleMiddleware(["client", "admin"]),
      authMiddleware,
      AddressController.getByUser,
    );
  };
}
