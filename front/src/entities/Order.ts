export class Order {
  constructor(
    public id: number,
    public status: string,
    public cupomId: number,
    public addressId: number,
    public deliverUserId?: number,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}
}
