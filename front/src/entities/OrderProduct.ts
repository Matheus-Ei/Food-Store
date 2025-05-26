export class OrderProduct {
  constructor(
    public id: number,
    public price: number,
    public quantity: number,
    public orderId: number,
    public productId: number,
  ) {}
}
