import { OrderProduct } from "../entities/OrderProduct";
import CurrentModel from "../models/OrderProductsModel";

export class OrderProductService {
  static get = async (orderId: number, productId: number) => {
    return await CurrentModel.findOne({ where: { orderId, productId } });
  };

  static getAll = async (orderId: number) => {
    return await CurrentModel.findAll({ where: { orderId } });
  };

  static create = async (data: Omit<OrderProduct, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (
    orderId: number,
    productId: number,
    data: Partial<OrderProduct>,
  ) => {
    await CurrentModel.update(data, { where: { orderId, productId } });
    return await CurrentModel.findOne({ where: { orderId, productId } });
  };

  static destroy = async (orderId: number, productId: number) => {
    await CurrentModel.destroy({ where: { orderId, productId } });
  };
}
