import { Application } from "express";
import { CupomController } from "../controllers/CupomController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class CupomRoute {
  static init = (app: Application) => {
    app.post("/cupoms", authMiddleware, CupomController.create);

    app.patch("/cupoms/:id", authMiddleware, CupomController.update);

    app.delete("/cupoms/:id", authMiddleware, CupomController.destroy);

    app.get("/cupoms/:id", authMiddleware, CupomController.get);

    app.get("/cupoms", authMiddleware, CupomController.getAll);
  };
}
