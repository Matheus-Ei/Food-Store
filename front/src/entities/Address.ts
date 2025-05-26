export class Address {
  constructor(
    public id: number,
    public zipCode: string,
    public state: string,
    public city: string,
    public street: string,
    public district: string,
    public userId: number,
  ) {}
}
