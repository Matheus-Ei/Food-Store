import { ENV } from "../core/enviroment";
import { User } from "../entities/User";
import CurrentModel from "../models/UsersModel";
import { Hash } from "../utils/hash";
import { Token } from "../utils/token";

export class UserService {
  static get = async (id: number) => {
    return await CurrentModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static login = async (email: string, password: string) => {
    const user = await CurrentModel.findOne({ where: { email } });

    if (!user) return false;

    const isMatch = await Hash.compare(password, user.getDataValue("password"));

    let token = null;
    if (isMatch) {
      token = Token.generate(
        { id: String(user.getDataValue("id")) },
        100000000,
        ENV.ACCESS_SECRET,
      );
    }

    // req.headers.autorization
    return token;
  };

  static create = async (data: Omit<User, "id">) => {
    const treatedData = { ...data, password: await Hash.make(data.password) };
    return await CurrentModel.create(treatedData);
  };

  static update = async (id: number, data: Partial<User>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
