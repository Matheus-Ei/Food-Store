import { Address } from "../entities/Address";
import CurrentModel from "../models/AddressesModel";

export class AddressService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getByUser = async (userId: number) => {
    return await CurrentModel.findAll({ where: { userId } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<Address, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<Address>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
