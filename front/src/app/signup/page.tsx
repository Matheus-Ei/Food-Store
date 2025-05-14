import { Button, Card, Field, Flex, Input, Stack } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gapY={6}
    >
      <Card.Root width="sm">
        <Card.Header>
          <Card.Title>Signup</Card.Title>

          <Card.Description>Fill in the form below to signup</Card.Description>
        </Card.Header>

        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input />
            </Field.Root>

            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input />
            </Field.Root>

            <Field.Root>
              <Field.Label>Role</Field.Label>
              <Input />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input type="email" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input type="password" />
            </Field.Root>
          </Stack>
        </Card.Body>

        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">Cancel</Button>

          <Button variant="solid">Signup</Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};

export default Signup;
