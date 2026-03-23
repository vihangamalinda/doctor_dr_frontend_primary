import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Form from "../../ui/secondary-ui/Form";
import Input from "../../ui/secondary-ui/Input";
import Button from "../../ui/secondary-ui/Button";
import CustomFormRow from "../../ui/secondary-ui/CustomFormRow";
import styled from "styled-components";
import Row from "../../ui/secondary-ui/Row";
import Logo from "../../ui/Logo";
import Heading from "../../ui/secondary-ui/Heading";
import FormRowVertical from "../../ui/request-form-ui/FormRowVertical";
import { createJwtTokenByUserLogin } from "../../services/apis/apiUserCredentials.js";
import { useLogin } from "./hooks/useLogin.js";
import SpinnerMini from "../../ui/secondary-ui/SpinnerMini.jsx";

const HeaderInfor = styled.h2`
  color: var(--color-grey-800);
  font-size: 2.4rem;
  text-align: center;
`;
const Header = styled.h1`
  color: var(--color-grey-800);
  font-size: 3.4rem;
  text-align: center;
`;

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticating } = useLogin();

  const methods = useForm();
  const { handleSubmit, formState } = methods;
  const { errors } = formState;

  const onSubmit = () => {
    if (!username || !password) {
      console.log("Username and password are required");
      return;
    }
    const data = {
      username,
      password,
    };
    login(data);
  };
  
  function onError(err) {
    console.log(err);
  }

  return (
    <>
      <Logo />
      <Heading as="h4">Doctor DR</Heading>
      <Heading as="h4">Login to your account</Heading>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRowVertical label="Username" error={errors?.username?.message}>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            disabled={isAuthenticating}
          />
        </FormRowVertical>
        <FormRowVertical label="Password" error={errors?.password?.message}>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isAuthenticating}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button
            variation="primary"
            size="large"
            type="submit"
            disabled={isAuthenticating}
          >
            {isAuthenticating ? <SpinnerMini /> : "Login"}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  );
}
export default LoginForm;
