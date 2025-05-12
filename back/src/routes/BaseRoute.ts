import { Application } from "express";
import { BaseController } from "../controllers/BaseController";

export class BaseRoute {
  static init = (app: Application) => {
    app.post("/bases", BaseController.create);
    app.patch("/bases/:id", BaseController.update);
    app.delete("/bases/:id", BaseController.destroy);
    app.get("/bases/:id", BaseController.get);
    app.get("/bases", BaseController.getAll);
  };
}
