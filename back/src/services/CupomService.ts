import { Cupom } from "../entities/Cupom";
import CurrentModel from "../models/CupomsModel";

export class CupomService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<Cupom, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<Cupom>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
