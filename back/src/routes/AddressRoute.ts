import { Application } from "express";
import { AddressController } from "../controllers/AddressController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

export class AddressRoute {
  static init = (app: Application) => {
    app.post(
      "/addresses",
      roleMiddleware(["client", "admin"]),
      authMiddleware,
      AddressController.create,
    );

    app.patch(
      "/addresses/:id",
      roleMiddleware(["client", "admin"]),
      authMiddleware,
      AddressController.update,
    );

    app.delete(
      "/addresses/:id",
      roleMiddleware(["client", "admin"]),
      authMiddleware,
      AddressController.destroy,
    );

    app.get("/addresses/:id", authMiddleware, AddressController.get);
  };
}
