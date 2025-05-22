import { Grid } from "@chakra-ui/react";
import {
  CardItem,
  CardItemProps,
} from "@/components/molecules/CardGrid/CardItem";

interface CardGridProps {
  items: CardItemProps[];
}

export const CardGrid = ({ items }: CardGridProps) => {
  return (
    <Grid templateColumns={"repeat(auto-fill, minmax(200px, 1fr))"} gap={6} my={4}>
      {items.map((i) => (
        <CardItem key={i.title} {...i} />
      ))}
    </Grid>
  );
};
