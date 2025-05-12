import { Application } from "express";
import { BaseRoute } from "./BaseRoute";

export const routes = (app: Application) => {
  BaseRoute.init(app);
};
