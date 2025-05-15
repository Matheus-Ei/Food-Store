"use client";

import { useServiceMutation } from "@/hooks/useServiceMutation";
import { UserService } from "@/services/UserService";
import { Button, Card, Field, Flex, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const { mutate } = useServiceMutation(() =>
    UserService.signup({ email, password, name, username, role }),
  );

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
              <Input onChange={(event) => setName(event.target.value)} />
            </Field.Root>

            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input onChange={(event) => setUsername(event.target.value)} />
            </Field.Root>

            <Field.Root>
              <Field.Label>Role</Field.Label>
              <Input onChange={(event) => setRole(event.target.value)} />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Field.Root>
          </Stack>
        </Card.Body>

        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">Cancel</Button>

          <Button variant="solid" onClick={() => mutate({})}>
            Signup
          </Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};

export default Signup;
