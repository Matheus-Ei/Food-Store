import { Request } from "@/utils/request";
import { Cupon } from "@/entities/Cupon";

export class CuponService {
  static endpoint = "cupoms";

  static getAll = async () => {
    const response = await Request.get<Cupon[]>(`${this.endpoint}/`);
    return response?.data.resource as Cupon[];
  };

  static create = async (data: Omit<Cupon, "id">) => {
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
