export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public cpf: string,
    public email: string,
    public phone: string,
    public password: string,
    public role: string,
    public token: string,
    public cart: object,
    public recuperation: string,
  ) {}
}
