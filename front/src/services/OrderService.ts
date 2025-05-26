import { Request } from "@/utils/request";
import {Order} from "@/entities/Order";

export class OrderService {
  static endpoint = "orders";

  static getAll = async () => {
    const response = await Request.get<Order[]>(`${this.endpoint}/`);
    return response?.data.resource as Order[];
  };

  static create = async (data: Omit<Order, 'id'>) => {
    const response = await Request.post(`${this.endpoint}/`, data);
    return response?.data.resource;
  };

  static get = async (id: number) => {
    const response = await Request.get(`${this.endpoint}/${id}`);
    return response?.data.resource;
  };

  static delete = async (id: number) => {
    const response = await Request.delete(`${this.endpoint}/${id}`);
    return response?.data.resource;
  };
}
