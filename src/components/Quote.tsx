import { useEffect, useState } from "react";
import styled from "styled-components";

const QuoteComponent = styled.div`
  height: 15vh;
  grid-column: 1/3;
  grid-row: 3;
  text-align: center;
  padding: 30px 0;
  p:first-child {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 800;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
`;

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const apiCall = async () => {
    const json = await (await fetch(`https://api.quotable.io/random`)).json();
    if (json) {
      setQuote(`"${json.content}"`);
      setAuthor(json.author);
    } else {
      setQuote("An error occured");
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <QuoteComponent>
      <p>{quote}</p>
      <p>- {author} -</p>
    </QuoteComponent>
  );
};

export default Quote;
