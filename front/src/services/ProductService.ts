import { Request } from "@/utils/request";
import {Product} from "@/entities/Product";

export class ProductService {
  static endpoint = "products";

  static getAll= async () => {
    const response = await Request.get<Product[]>(`${this.endpoint}/`);
    return response?.data.resource as Product[];
  };

  static create = async (data: Product) => {
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
