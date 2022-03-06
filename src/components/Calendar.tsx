import styled from "styled-components";

const CalendarComponent = styled.h1`
  font-size: 24px;
  line-height: 35px;
  text-align: right;
`;

const Calendar: React.FunctionComponent = () => {
  const day = new Date();

  const getDay = (day: Date) => {
    switch (day.getDay()) {
      case 1:
        return "월요일";
      case 2:
        return "화요일";
      case 3:
        return "수요일";
      case 4:
        return "목요일";
      case 5:
        return "금요일";
      case 6:
        return "토요일";
      case 7:
        return "일요일";
    }
  };

  return (
    <CalendarComponent>
      <p>오늘은 {getDay(day)}</p>
      <p>
        {day.getFullYear()}년 {day.getMonth() + 1}월 {day.getDate()}일
      </p>
    </CalendarComponent>
  );
};

export default Calendar;
