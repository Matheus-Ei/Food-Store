import { Application } from "express";
import { CategoryRoute } from "./CategoryRoute";
import { ProductRoute } from "./ProductRoute";

export const routes = (app: Application) => {
  CategoryRoute.init(app);
  ProductRoute.init(app);
};
