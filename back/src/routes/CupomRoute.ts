import { Application } from "express";
import { CupomController } from "../controllers/CupomController";

export class CupomRoute {
  static init = (app: Application) => {
    app.post("/categories", CupomController.create);
    app.patch("/categories/:id", CupomController.update);
    app.delete("/categories/:id", CupomController.destroy);
    app.get("/categories/:id", CupomController.get);
    app.get("/categories", CupomController.getAll);
  };
}
