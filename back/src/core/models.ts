import CategoriesModel from "../models/CategoriesModel";
import ProductsModel from "../models/ProductsModel";

// The order matters here
export const models = async () => {
  await CategoriesModel.sync({ force: true });
  await ProductsModel.sync({ force: true });
};
