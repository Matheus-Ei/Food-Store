export class OrderProduct {
  constructor(
    public price: number,
    public quantity: number,
    public orderId: number,
    public productId: number,
  ) {}
}
