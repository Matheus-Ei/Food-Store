export class Product {
  constructor(
      public id: number,
    public name: string,
    public price: number,
    public image: string,
    public description: string,
    public categoryId: string,
  ) {}
}
