import { useEffect, useState } from "react";
import styled from "styled-components";

const ClockComponent = styled.div`
  height: 10vh;
  grid-column: 1/3;
  grid-row: 1;
  text-align: center;
  span {
    font-size: 70px;
  }
  @media screen and (max-width: 650px) {
    margin-top: 30px;
    span {
      font-size: 50px;
    }
  }
`;

const Clock = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    setInterval(() => {
      getClock();
    }, 1000);
  });

  const getClock = () => {
    const date = new Date();
    setHours(String(date.getHours()).padStart(2, "0"));
    setMinutes(String(date.getMinutes()).padStart(2, "0"));
    setSeconds(String(date.getSeconds()).padStart(2, "0"));
  };

  return (
    <ClockComponent>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </ClockComponent>
  );
};

export default Clock;
