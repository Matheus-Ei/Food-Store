import { Request, Response } from "express";
import { OrderProductService } from "../services/OrderProductService";
import { Res } from "../utils/response";

export class OrderProductController {
  static get = async (req: Request, res: Response) => {
    const { orderId, productId } = req.params;

    try {
      const resource = await OrderProductService.get(Number(orderId), Number(productId));

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static getAll = async (req: Request, res: Response) => {
    const {orderId} = req.params;

    try {
      const resource = await OrderProductService.getAll(Number(orderId));

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static create = async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const resource = await OrderProductService.create(data);

      return Res.sendByType(res, "created", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static update = async (req: Request, res: Response) => {
    const { orderId, productId } = req.params;
    const data = req.body;

    try {
      const resource = await OrderProductService.update(Number(orderId), Number(productId), data);

      return Res.sendByType(res, "updated", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static destroy = async (req: Request, res: Response) => {
    try {
      const { orderId, productId } = req.params;

      await OrderProductService.destroy(Number(orderId), Number(productId));

      return Res.sendByType(res, "deleted");
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };
}
