import AddressesModel from "../models/AddressesModel";
import CategoriesModel from "../models/CategoriesModel";
import CupomsModel from "../models/CupomsModel";
import OrderProductsModel from "../models/OrderProductsModel";
import OrdersModel from "../models/OrdersModel";
import ProductsModel from "../models/ProductsModel";
import UsersModel from "../models/UsersModel";

// The order matters here
export const models = async () => {
  await CategoriesModel.sync({ force: true });
  await UsersModel.sync({ force: true });
  await AddressesModel.sync({ force: true });
  await CupomsModel.sync({ force: true });
  await ProductsModel.sync({ force: true });
  await OrdersModel.sync({ force: true });
  await OrderProductsModel.sync({ force: true });
};
