import { Request, Response } from "express";
import { AddressService } from "../services/AddressService";
import { Res } from "../utils/response";
import {Token} from "../utils/token";
import jwt from "jsonwebtoken";
import {ENV} from "../core/enviroment";

export class AddressController {
  static get = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const resource = await AddressService.get(Number(id));

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static getAll = async (_: Request, res: Response) => {
    try {
      const resource = await AddressService.getAll();

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static getByUser = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;
    const stringToken = token.split(" ")[1];

    const decoded = jwt.verify(stringToken, ENV.ACCESS_SECRET as string) as {
      id: string;
    };

    const userId = decoded.id;

    try {
      const resource = await AddressService.getByUser(Number(userId));

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static create = async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const resource = await AddressService.create(data);

      return Res.sendByType(res, "created", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const resource = await AddressService.update(Number(id), data);

      return Res.sendByType(res, "updated", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static destroy = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await AddressService.destroy(Number(id));

      return Res.sendByType(res, "deleted");
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };
}
