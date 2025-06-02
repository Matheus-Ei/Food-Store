import { ProductOrder } from "@/app/dashboard/admin/orders/page";
import { Button, Flex } from "@chakra-ui/react";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { ProductService } from "@/services/ProductService";
import { useColorModeValue } from "@/components/ui/color-mode";
import {Dispatch, SetStateAction} from "react";

interface ProductElementProps {
  product: ProductOrder;
  setProducts: Dispatch<SetStateAction<ProductOrder[]>>;
}

export const ProductElement = ({ product, setProducts }: ProductElementProps) => {
  // eslint-disable-next-line
  const { data } = useServiceQuery<any>(
    async () => await ProductService.get(product.id),
    ["getProduct", product.id],
  );

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  }

  return (
    <Flex
      style={{
        padding: "0.5rem",
        borderRadius: "0.375rem",
      }}
      gapX={2}
      alignItems={'center'}
      position={'relative'}
      bgColor={useColorModeValue("gray.200", "gray.700")}
    >
      <h1>{product.quantity}</h1>

      <h1>{data?.name}</h1>

      <Button position='absolute' right={4} onClick={handleDelete} size="2xs" colorScheme="red">
        X
      </Button>
    </Flex>
  );
};
