import { Application } from "express";
import { AddressController } from "../controllers/AddressController";

export class AddressRoute {
  static init = (app: Application) => {
    app.post("/addresses", AddressController.create);
    app.patch("/addresses/:id", AddressController.update);
    app.delete("/addresses/:id", AddressController.destroy);
    app.get("/addresses/:id", AddressController.get);
    app.get("/addresses", AddressController.getAll);
  };
}
