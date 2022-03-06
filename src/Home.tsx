import styled from "styled-components";
import Calendar from "./components/Calendar";
import TodoList from "./components/TodoList";

const Container = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const Greeting = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 650px) {
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
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

const Clock = styled.div`
  grid-column: 1/3;
  grid-row: 1;
`;

const Weather = styled.div`
  grid-row: 2;
`;

const BookMark = styled.div`
  grid-row: 2;
`;

const Quote = styled.div`
  grid-column: 1/3;
  grid-row: 3;
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
            <Clock>Clock</Clock>
            <Weather>Weather</Weather>
            <BookMark>BookMark</BookMark>
            <Quote>Quote</Quote>
          </Grid>
        </Contents>
      </Container>
    </>
  );
};

export default Home;
