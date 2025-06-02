import { Address } from "../entities/Address";
import CurrentModel from "../models/AddressesModel";
import jwt from "jsonwebtoken";
import { ENV } from "../core/enviroment";

interface CreateAddress extends Omit<Omit<Address, "id">, "userId"> {
  accessToken: string;
}

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

  static create = async (data: CreateAddress) => {
    const decoded = jwt.verify(
      data.accessToken,
      ENV.ACCESS_SECRET as string,
    ) as {
      id: string;
    };

    return await CurrentModel.create({
      ...data,
      userId: Number(decoded.id),
    });
  };

  static update = async (id: number, data: Partial<Address>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
