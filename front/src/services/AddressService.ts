import { Request } from "@/utils/request";
import {Address} from "@/entities/Address";

export class AddressService {
  static endpoint = "addresses";

  static create = async (data: Omit<Address, 'id'>) => {
    const response = await Request.post(`${this.endpoint}/`, data);
    return response?.data.resource;
  };

  static getByUser = async () => {
    const response = await Request.get<Address[]>(`users/${this.endpoint}`);
    return response?.data.resource as Address[];
  };

  static delete = async (id: number) => {
    const response = await Request.delete(`${this.endpoint}/${id}`);
    return response?.data.resource;
  };
}
