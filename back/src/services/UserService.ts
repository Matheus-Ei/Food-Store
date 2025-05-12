import { User } from "../entities/User";
import CurrentModel from "../models/UsersModel";

export class UserService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<User, "id">) => {
    return await CurrentModel.create(data);
  };

  static update = async (id: number, data: Partial<User>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
