import { Product } from "../entities/Product";
import CurrentModel from "../models/ProductsModel";

export class ProductService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static getByCategory = async (categoryId: number) => {
    return await CurrentModel.findAll({ where: { categoryId } });
  };

  static create = async (data: Omit<Product, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<Product>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
