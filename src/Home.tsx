import styled from "styled-components";
import Calendar from "./components/Calendar";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import BookMark from "./components/BookMark";
import Quote from "./components/Quote";

const Container = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const Greeting = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    padding: 30px;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 35px;
`;

const Contents = styled.div`
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Grid = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

const Home = () => {
  const userName = localStorage.getItem("username");
  return (
    <>
      <Container>
        <Greeting>
          <Title>
            환영합니다. {userName}님
            <br />
            하루의 시작입니다.
          </Title>
          <Calendar />
        </Greeting>
        <Contents>
          <TodoList />
          <Grid>
            <Clock />
            <Weather />
            <BookMark />
            <Quote />
          </Grid>
        </Contents>
      </Container>
    </>
  );
};

export default Home;
