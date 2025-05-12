import { Base } from "../entities/Base";
import BaseModel from "../models/BaseModel";

export class BaseService {
  static get = async (id: number) => {
    return await BaseModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await BaseModel.findAll();
  };

  static create = async (data: Omit<Base, "id">) => {
    return await BaseModel.create(data);
  };

  static update = async (id: number, data: Partial<Base>) => {
    await BaseModel.update(data, { where: { id } });
    return await BaseModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await BaseModel.destroy({ where: { id } });
  };
}
