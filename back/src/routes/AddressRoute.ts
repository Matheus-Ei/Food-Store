import { Application } from "express";
import { AddressController } from "../controllers/AddressController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class AddressRoute {
  static init = (app: Application) => {
    app.post("/addresses", authMiddleware, AddressController.create);

    app.patch("/addresses/:id", authMiddleware, AddressController.update);

    app.delete("/addresses/:id", authMiddleware, AddressController.destroy);

    app.get("/addresses/:id", authMiddleware, AddressController.get);

    app.get("/addresses", authMiddleware, AddressController.getAll);
  };
}
