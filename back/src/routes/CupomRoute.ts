import { Application } from "express";
import { CupomController } from "../controllers/CupomController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

export class CupomRoute {
  static init = (app: Application) => {
    app.post(
      "/cupoms",
      roleMiddleware(["admin"]),
      authMiddleware,
      CupomController.create,
    );

    app.patch(
      "/cupoms/:id",
      roleMiddleware(["admin"]),
      authMiddleware,
      CupomController.update,
    );

    app.delete(
      "/cupoms/:id",
      roleMiddleware(["admin"]),
      authMiddleware,
      CupomController.destroy,
    );

    app.get("/cupoms/:id", authMiddleware, CupomController.get);

    app.post(
      "/cupoms/:code/uses",
      roleMiddleware(["admin", "client"]),
      authMiddleware,
      CupomController.use,
    );
    app.get(
      "/cupoms/:code/uses",
      roleMiddleware(["admin", "client"]),
      authMiddleware,
      CupomController.getUses,
    );

    app.get(
      "/cupoms",
      roleMiddleware(["admin"]),
      authMiddleware,
      CupomController.getAll,
    );
  };
}
