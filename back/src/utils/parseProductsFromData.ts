interface ProductsCollector {
    // eslint-disable-next-line
  [index: string]: any;
}

export const parseProductsFromData = (
    // eslint-disable-next-line
  data: any,
) => {
  const productsCollector: ProductsCollector = {};
  const productKeyRegex = /^products\[(\d+)\]\[(\w+)\]$/;

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const match = key.match(productKeyRegex);

      if (match) {
        const index: string = match[1];
        const propertyName: string = match[2];
        const value: string = data[key];

        if (!productsCollector[index]) {
          productsCollector[index] = {};
        }
        productsCollector[index][propertyName] = value;
      }
    }
  }

  // eslint-disable-next-line
  const sortedProductArray: any[] = Object.keys(productsCollector)
    .sort((a: string, b: string) => Number(a) - Number(b))
    .map((index: string) => productsCollector[index]);

  return sortedProductArray;
};
