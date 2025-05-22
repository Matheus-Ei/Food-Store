import { User } from "@/entities/User";
import { Request } from "@/utils/request";
import {Storage} from "@/utils/storage";

export class UserService {
  static endpoint = "users";

  static login = async (email: string, password: string) => {
    const response = await Request.post(`${this.endpoint}/auth`, {
      email,
      password,
    });

    const token = await response?.data.resource as string;
    Storage.set('access_token', token)

    return token;
  };

  static signup = async (user: Partial<User>) => {
    const response = await Request.post(`${this.endpoint}`, user);
    return response?.data.resource;
  };
}
