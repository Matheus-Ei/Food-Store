import { Button, Card, Image, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

export interface CardItemProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  value?: string;
  onDelete?: () => unknown;
  onUpdate?: () => unknown;
  onOpen?: () => unknown;
}

export const CardItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  value,
  onDelete,
  onUpdate,
  onOpen,
}: CardItemProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      {imageSrc && imageAlt && (
        <Image src={imageSrc} alt={imageAlt} objectFit="cover" />
      )}

      <Card.Body gap="2">
        {title && <Card.Title>{title}</Card.Title>}

        {description && <Card.Description>{description}</Card.Description>}

        {value && (
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {value}
          </Text>
        )}
      </Card.Body>

      {(onDelete || onUpdate || onOpen) && (
        <Card.Footer>
          {onDelete && (
            <Button onClick={onDelete} colorScheme="red" size="sm">
              <DeleteIcon />
            </Button>
          )}

          {onUpdate && (
            <Button onClick={onUpdate} colorScheme="blue" size="sm">
              <EditIcon />
            </Button>
          )}

          {onOpen && (
            <Button onClick={onOpen} colorScheme="green" size="sm">
              <ViewIcon />
            </Button>
          )}
        </Card.Footer>
      )}
    </Card.Root>
  );
};
