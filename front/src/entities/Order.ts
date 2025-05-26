export class Order {
  constructor(
    public id: number,
    public status: string,
    public total: number,
    public discount: number,
    public custumerUserId: number,
    public deliverUserId: number,
    public addressId: number,
    public paymentId: number,
    public cupomId: number,
  ) {}
}
