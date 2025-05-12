import { Order } from "../entities/Order";
import CurrentModel from "../models/OrdersModel";

export class OrderService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<Order, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<Order>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
