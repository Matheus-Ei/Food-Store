import { Application } from "express";
import { AddressController } from "../controllers/AddressController";

export class AddressRoute {
  static init = (app: Application) => {
    app.post("/categories", AddressController.create);
    app.patch("/categories/:id", AddressController.update);
    app.delete("/categories/:id", AddressController.destroy);
    app.get("/categories/:id", AddressController.get);
    app.get("/categories", AddressController.getAll);
  };
}
