import { OrderProduct } from "../entities/OrderProduct";
import CurrentModel from "../models/OrderProductsModel";

export class OrderProductService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<OrderProduct, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<OrderProduct>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
