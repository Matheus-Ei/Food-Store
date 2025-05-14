import { Cupom } from "../entities/Cupom";
import CurrentModel from "../models/CupomsModel";

export class CupomService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getUses = async (code: string) => {
    const cupom = await CurrentModel.findOne({ where: { code } });
    return await cupom?.getDataValue("uses");
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<Cupom, "id">) => {
    return await CurrentModel.create(data);
  };

  static use = async (code: string) => {
    const cupom = await CurrentModel.findOne({ where: { code } });
    const uses = cupom?.getDataValue("uses");

    if (uses > 0) {
      this.update(cupom?.getDataValue("id"), { uses: uses - 1 });
    } else {
      throw new Error("This cupom already was used");
    }
  };

  static update = async (id: number, data: Partial<Cupom>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
