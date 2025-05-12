import { Category } from "../entities/Category";
import CurrentModel from "../models/CategoriesModel";

export class CategoryService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<Category, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<Category>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
