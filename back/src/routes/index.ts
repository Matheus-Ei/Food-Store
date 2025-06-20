import { Application } from "express";
import { CategoryRoute } from "./CategoryRoute";
import { ProductRoute } from "./ProductRoute";
import { OrderRoute } from "./OrderRoute";
import { UserRoute } from "./UserRoute";
import { CupomRoute } from "./CupomRoute";
import { AddressRoute } from "./AddressRoute";

export const routes = (app: Application) => {
  CategoryRoute.init(app);
  ProductRoute.init(app);
  OrderRoute.init(app);
  UserRoute.init(app);
  CupomRoute.init(app);
  AddressRoute.init(app);
};
