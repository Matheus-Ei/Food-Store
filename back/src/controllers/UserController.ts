import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { Res } from "../utils/response";

export class UserController {
  static get = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
      const resource = await UserService.get(Number(userId));

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const resource = await UserService.login(email, password);
      if (!resource) return Res.sendByType(res, "badRequest");

      return Res.sendByType(res, "success", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static getAll = async (_: Request, res: Response) => {
    try {
      const resource = await UserService.getAll();

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static create = async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const resource = await UserService.create(data);

      return Res.sendByType(res, "created", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static update = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const data = req.body;

    try {
      const resource = await UserService.update(Number(userId), data);

      return Res.sendByType(res, "updated", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static destroy = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;

      await UserService.destroy(Number(userId));

      return Res.sendByType(res, "deleted");
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };
}
