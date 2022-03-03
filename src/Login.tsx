import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 500px) {
    background-color: transparent;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 50px;
`;

const LoginInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: solid 1px ${(props) => props.theme.textColor};
  padding: 10px;
  margin-bottom: 50px;
  font-size: 24px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 80px;
  border: none;
  text-transform: uppercase;
`;

interface IProps {
  getUserName: Function;
}

const Login: React.FunctionComponent<IProps> = ({ getUserName }) => {
  const [user, setUser] = useState("");

  const handleLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("username", user);
    getUserName(user);
  };

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.currentTarget.value);
  };

  return (
    <>
      <Container>
        <LoginForm onSubmit={handleLoginForm}>
          <Title>하루의 시작</Title>
          <LoginInput
            onChange={handleLoginInput}
            placeholder="Enter your name"
          />
          <LoginButton>Log In</LoginButton>
        </LoginForm>
      </Container>
    </>
  );
};

export default Login;
