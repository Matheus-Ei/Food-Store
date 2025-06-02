import { Product } from "../entities/Product";
import CurrentModel from "../models/ProductsModel";
import CategoriesModel from "../models/CategoriesModel";

interface CreateProduct {
  name: string,
  price: number,
  image: string,
  description: string,
  category: string,
}

export class ProductService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static getByCategory = async (category: string) => {
    const categoryEnt = await CategoriesModel.findOne({
      where: { title: category },
    });

    return await CurrentModel.findAll({
      where: { categoryId: categoryEnt?.getDataValue("id") },
    });
  };

  static create = async (data: CreateProduct) => {
    const category = await CategoriesModel.findOne({
      where: { name: data.category },
    });

    if (!category) throw new Error("Category not found");

    const categoryId = category.getDataValue("id");

    return await CurrentModel.create({
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.image,
      categoryId,
    });
  };

  static update = async (id: number, data: Partial<Product>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
