import { Request } from "@/utils/request";
import { Order } from "@/entities/Order";
import {Product} from "@/entities/Product";

export interface OrderProduct {
  order: Order
  products: Product[]
}

export class OrderService {
  static endpoint = "orders";

  static getAll = async () => {
    const response = await Request.get<Order[]>(`${this.endpoint}/`);
    return response?.data.resource as Order[];
  };

  // eslint-disable-next-line
  static create = async (data: any) => {
    const response = await Request.post(`${this.endpoint}/`, data);
    return response?.data.resource;
  };

  // eslint-disable-next-line
  static update = async (orderId: number, data: any) => {
    const response = await Request.patch(`${this.endpoint}/${orderId}`, data);
    return response?.data.resource;
  };

  static get = async (id: number) => {
    const response = await Request.get<OrderProduct>(`${this.endpoint}/${id}`);
    return response?.data.resource as OrderProduct;
  };

  static delete = async (id: number) => {
    const response = await Request.delete(`${this.endpoint}/${id}`);
    return response?.data.resource;
  };
}
