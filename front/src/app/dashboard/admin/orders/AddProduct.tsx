import { Button, Flex, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ProductOrder } from "@/app/dashboard/admin/orders/page";

interface AddProductProps {
  setProducts: Dispatch<SetStateAction<ProductOrder[]>>;
}

export const AddProduct = ({ setProducts }: AddProductProps) => {
  const [productId, setProductId] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const handleClick = () => {
    setProducts((prev) => [...prev, { id: productId, quantity }]);
  };

  return (
    <Flex gapX={4}>
      <Input
        placeholder="Product"
        onChange={(e) => setProductId(Number(e.target.value))}
        type="number"
      />

      <Input
        placeholder="Quantity"
        onChange={(e) => setQuantity(Number(e.target.value))}
        type="number"
      />

      <Button onClick={handleClick}>New product</Button>
    </Flex>
  );
};
