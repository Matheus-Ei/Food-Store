import { Product } from "../entities/Product";
import ProductsModel from "../models/ProductsModel";

export class ProductService {
  static get = async (id: number) => {
    return await ProductsModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await ProductsModel.findAll();
  };

  static create = async (data: Omit<Product, "id">) => {
    return await ProductsModel.create(data);
  };

  static update = async (id: number, data: Partial<Product>) => {
    await ProductsModel.update(data, { where: { id } });
    return await ProductsModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await ProductsModel.destroy({ where: { id } });
  };
}
