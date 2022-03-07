import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BookMarkComponent = styled.div`
  height: 40vh;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.1);
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BookMarkTitle = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.accentColor};
`;

const BookMarkForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  padding: 8px;
  background-color: transparent;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  padding: 8px 16px;
  border: none;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: transparent;
    font-weight: 800;
    border: none;
    cursor: pointer;
  }
`;

interface IItem {
  id: number;
  url: string;
  name: string;
}

const BookMark = () => {
  const [url, setURL] = useState("");
  const [name, setName] = useState("");
  const [item, setItem] = useState<IItem>();
  const [items, setItems] = useState<IItem[]>([]);

  const LOCAL_BOOKMARK_KEY = "bookmark";

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_BOOKMARK_KEY);
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_BOOKMARK_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (item !== undefined) {
      setItems([...items, item]);
      setItem(undefined);
    }
  }, [item]);

  const handleBookMarkForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (url === "" && name === "") {
      alert("이름과 URL을 모두 입력하세요");
    } else {
      setItem({
        id: Date.now(),
        url: url,
        name: name,
      });
      setURL("");
      setName("");
    }
  };

  const handleBookMarkName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleBookMarkURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setURL(event.currentTarget.value);
  };

  const handleBookMarkDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.previousSibling?.textContent;
    setItems(items.filter((item) => target !== item.name));
  };

  return (
    <BookMarkComponent>
      <BookMarkTitle>Book Mark</BookMarkTitle>
      <BookMarkForm onSubmit={handleBookMarkForm}>
        <Input
          type="text"
          value={name}
          onChange={handleBookMarkName}
          placeholder="Enter your URL Name"
        />
        <Input
          type="text"
          value={url}
          onChange={handleBookMarkURL}
          placeholder="Enter your URL"
        />
        <Button>추가</Button>
      </BookMarkForm>
      <List>
        {items.map((item) => {
          return (
            <Item key={item.id}>
              <a href={item.url} target="_blank">
                📁 {item.name}
              </a>
              <button onClick={handleBookMarkDelete}>{"X"}</button>
            </Item>
          );
        })}
      </List>
    </BookMarkComponent>
  );
};

export default BookMark;
