import {Card, Image, Text} from "@chakra-ui/react";

export interface CardItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
}

export const CardItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  price,
}: CardItemProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        objectFit="cover"
      />

      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>

        <Card.Description>{description}</Card.Description>

        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {price}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};
