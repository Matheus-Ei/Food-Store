import { Order } from "../entities/Order";
import CurrentModel from "../models/OrdersModel";
import CupomsModel from "../models/CupomsModel";
import jwt from "jsonwebtoken";
import { ENV } from "../core/enviroment";
import ProductsModel from "../models/ProductsModel";
import OrderProductsModel from "../models/OrderProductsModel";
import { parseProductsFromData } from "../utils/parseProductsFromData";
import { sequelize } from "../core/database";
import { QueryTypes } from "sequelize";

interface ProductOrder {
  id: number;
  quantity: number;
}

interface CreateOrder {
  status: string;
  accessToken: string;
  deliverUserId?: number;
  addressId: number;
  cupomCode?: number;
  products: ProductOrder[];
}

export class OrderService {
  static get = async (id: number) => {
    const order = await CurrentModel.findOne({ where: { id } });

    const products = await sequelize.query(
      `
           SELECT * 
           FROM order_products op 
           FULL JOIN products p ON p.id = op."productId"
           WHERE op."orderId" = :orderId
        `,
      { replacements: { orderId: id }, type: QueryTypes.SELECT },
    );

    return { order, products };
  };

  static getAll = async () => {
    return await CurrentModel.findAll();
  };

  static create = async (data: Omit<CreateOrder, "id">) => {
    const cupom = await CupomsModel.findOne({
      where: { code: data.cupomCode },
    });

    if (!cupom && data.cupomCode) throw new Error("Cupon not found");

    const cupomId = cupom?.getDataValue("id");

    const decoded = jwt.verify(
      data.accessToken,
      ENV.ACCESS_SECRET as string,
    ) as {
      id: string;
    };

    const order = await CurrentModel.create({
      status: data.status,
      custumerUserId: Number(decoded.id),
      deliverUserId: data.deliverUserId,
      addressId: data.addressId,
      cupomId,
    });

    for (const product of parseProductsFromData(data)) {
      const p = await ProductsModel.findOne({ where: { id: product.id } });

      if (!p) continue;

      await OrderProductsModel.create({
        productId: product.id,
        price: p.getDataValue("price") * product.quantity,
        quantity: product.quantity,
        orderId: order.getDataValue("id"),
      });
    }

    return order;
  };

  static update = async (id: number, data: Partial<Order>) => {
    await CurrentModel.update(data, { where: { id } });
    return await CurrentModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await CurrentModel.destroy({ where: { id } });
  };
}
