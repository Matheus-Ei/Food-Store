import { Input, Field } from "@chakra-ui/react";
import React from "react";

interface TextInputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  type?: string;
  name: string;
  id: string;
}

export const TextInput = ({
  label,
  value,
  setValue,
  placeholder,
  helperText,
  errorMessage,
  isRequired,
  type = "text",
  name,
  id,
}: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const isInvalid = !!errorMessage && errorMessage.length > 0;

  return (
    <Field.Root invalid={isInvalid} required={isRequired} id={id + "-field"}>
      <Field.Label htmlFor={id}>
        {label}
        {isRequired && <Field.RequiredIndicator />}
      </Field.Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {helperText && !isInvalid && (
        <Field.HelperText>{helperText}</Field.HelperText>
      )}
      {errorMessage && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};
