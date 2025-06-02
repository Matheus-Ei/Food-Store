export class Order {
  constructor(
    public status: string,
    public custumerUserId: number,
    public deliverUserId: number,
    public addressId: number,
    public cupomId: number,
  ) {}
}
