import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoListComponent = styled.div`
  width: 40vw;
  height: 75vh;
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 650px) {
    width: 80vw;
  }
`;

const TodoTitle = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  color: ${(props) => props.theme.accentColor};
`;

const TodoForm = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  padding: 8px;
  background-color: transparent;
  margin-right: 10px;
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

const Item = styled.li<{ isComplete: boolean }>`
  width: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button:first-child {
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
  }
  span {
    text-decoration-line: ${(props) =>
      props.isComplete ? "line-through" : "none"};
    color: ${(props) => (props.isComplete ? "rgba(0,0,0,0.5)" : "none")};
  }
  button:last-child {
    background-color: transparent;
    font-weight: 800;
    border: none;
    cursor: pointer;
  }
`;

interface IItem {
  id: number;
  todo: string;
  complete: boolean;
}

const TodoList: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const [item, setItem] = useState<IItem>();
  const [items, setItems] = useState<IItem[]>([]);

  const LOCAL_TODO_KEY = "todolist";

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_TODO_KEY);
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_TODO_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (item !== undefined) {
      setItems([...items, item]);
      setItem(undefined);
    }
  }, [item]);

  const handleTodoForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "") {
      alert("할일을 입력하세요");
    } else {
      setItem({
        id: Date.now(),
        todo: value,
        complete: false,
      });
      setValue("");
    }
  };

  const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  const handleTodoButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.nextSibling?.textContent;
    const newItems = items.map((item) =>
      target === item.todo
        ? { id: item.id, todo: item.todo, complete: !item.complete }
        : item
    );
    setItems(newItems);
  };

  const handleTodoDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.previousSibling?.textContent;
    setItems(items.filter((item) => target !== item.todo));
  };
  return (
    <TodoListComponent>
      <TodoTitle>Things To Do</TodoTitle>
      <TodoForm onSubmit={handleTodoForm}>
        <Input
          type="text"
          value={value}
          onChange={handleTodoInput}
          placeholder="Enter your To Do"
        />
        <Button type="submit">추가</Button>
      </TodoForm>
      <List>
        {items.map((item) => {
          return (
            <Item isComplete={item.complete} key={item.id}>
              <button onClick={handleTodoButton}>
                {item.complete ? "■" : "□"}
              </button>
              <span>{item.todo}</span>
              <button onClick={handleTodoDelete}>{"X"}</button>
            </Item>
          );
        })}
      </List>
    </TodoListComponent>
  );
};

export default TodoList;
