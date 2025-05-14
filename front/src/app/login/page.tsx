'use client';

import { useServiceMutation } from "@/hooks/useServiceMutation";
import { UserService } from "@/services/UserService";
import { Button, Card, Field, Flex, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useServiceMutation(() =>
    UserService.login(email, password),
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
          <Card.Title>Login</Card.Title>

          <Card.Description>Fill in the form below to login</Card.Description>
        </Card.Header>

        <Card.Body>
          <Stack gap="4" w="full">
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

          <Button variant="solid" onClick={() => mutate({email, password})}>Login</Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};

export default Login;
