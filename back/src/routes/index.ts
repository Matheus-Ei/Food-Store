import { Application } from "express";
import { CategoryRoute } from "./CategoryRoute";
import { ProductRoute } from "./ProductRoute";
import { PaymentRoute } from "./PaymentRoute";
import { OrderRoute } from "./OrderRoute";
import { OrderProductRoute } from "./OrderProductRoute";
import { UserRoute } from "./UserRoute";
import { CupomRoute } from "./CupomRoute";
import { AddressRoute } from "./AddressRoute";

export const routes = (app: Application) => {
  CategoryRoute.init(app);
  ProductRoute.init(app);
  PaymentRoute.init(app);
  OrderRoute.init(app);
  OrderProductRoute.init(app);
  UserRoute.init(app);
  CupomRoute.init(app);
  AddressRoute.init(app);
};
