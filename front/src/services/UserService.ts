import { User } from "@/entities/User";
import { Request } from "@/utils/request";

export class UserService {
  static endpoint = "users";

  static login = async (email: string, password: string) => {
    const response = await Request.post(`${this.endpoint}/auth`, {
      email,
      password,
    });
    return response?.data.resource;
  };

  static signup = async (user: User) => {
    const response = await Request.post(`${this.endpoint}/auth`, user);
    return response?.data.resource;
  };
}
