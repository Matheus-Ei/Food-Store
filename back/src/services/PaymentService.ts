import { Payment } from "../entities/Payment";
import CurrentModel from "../models/PaymentsModel";

export class PaymentService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<Payment, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<Payment>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
