export class Cupom {
  constructor(
    public code: string,
    public type: string,
    public value: number,
    public uses: number,
  ) {}
}
