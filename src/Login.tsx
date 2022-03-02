import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 100px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const LoginInput = styled.input`
  border: solid 1px #aaaaaa;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 20px;
`;

const LoginButton = styled.button``;

const Login = () => {
  return (
    <>
      <Container>
        <LoginForm>
          <Title>하루의 시작</Title>
          <LoginInput />
          <LoginButton>Log In</LoginButton>
        </LoginForm>
      </Container>
    </>
  );
};

export default Login;
