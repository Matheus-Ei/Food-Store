import { Request } from "@/utils/request";
import { Category } from "@/entities/Category";

export class CategoryService {
  static endpoint = "categories";

  static create = async (data: Omit<Category, "id">) => {
    const response = await Request.post(`${this.endpoint}/`, data);
    return response?.data.resource;
  };

  static getAll = async (): Promise<Category[]> => {
    const response = await Request.get<Category[]>(`${this.endpoint}/`);
    return response?.data.resource || [];
  };

  static delete = async (id: number) => {
    const response = await Request.delete(`${this.endpoint}/${id}`);
    return response?.data.resource;
  };
}
