export class Cupon {
  constructor(
    public id: number,
    public code: string,
    public type: string,
    public value: number,
    public uses: number,
  ) {}
}
