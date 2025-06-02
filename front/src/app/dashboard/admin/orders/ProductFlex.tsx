import { ProductOrder } from "@/app/dashboard/admin/orders/page";
import { Dispatch, SetStateAction } from "react";
import { Flex } from "@chakra-ui/react";
import { ProductElement } from "@/app/dashboard/admin/orders/ProductElement";
import { AddProduct } from "@/app/dashboard/admin/orders/AddProduct";

interface ProductFlexProps {
  products: ProductOrder[];
  setProducts: Dispatch<SetStateAction<ProductOrder[]>>;
}

export const ProductFlex = ({ products, setProducts }: ProductFlexProps) => {
  const renderProducts = (product: ProductOrder, index:number) => {
    return <ProductElement product={product} setProducts={setProducts} key={index}/>;
  };

  return (
    <Flex direction='column' gapY={2}>
      {products.map(renderProducts)}

      <AddProduct setProducts={setProducts} />
    </Flex>
  );
};
