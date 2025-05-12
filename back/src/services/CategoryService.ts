import { Category } from "../entities/Category";
import CategoriesModel from "../models/CategoriesModel";

export class CategoryService {
  static get = async (id: number) => {
    return await CategoriesModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CategoriesModel.findAll();
  };

  static create = async (data: Omit<Category, "id">) => {
    return await CategoriesModel.create(data);
  };

  static update = async (id: number, data: Partial<Category>) => {
    await CategoriesModel.update(data, { where: { id } });
    return await CategoriesModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CategoriesModel.destroy({ where: { id } });
  };
}
