import { Application } from "express";
import { CupomController } from "../controllers/CupomController";

export class CupomRoute {
  static init = (app: Application) => {
    app.post("/cupoms", CupomController.create);
    app.patch("/cupoms/:id", CupomController.update);
    app.delete("/cupoms/:id", CupomController.destroy);
    app.get("/cupoms/:id", CupomController.get);
    app.get("/cupoms", CupomController.getAll);
  };
}
