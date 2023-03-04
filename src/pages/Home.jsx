import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Form from "../components/Form";
import styled from "styled-components";
import GlobalStyle from "../static/GlobalStyle";

function Home() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    console.log("hello!");
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <h1>Todo List</h1>
        <div></div>
        <h1>@1nxeo</h1>
      </Header>
      <AddForm>
        <Form />
      </AddForm>
      <main>
        <h1>Working</h1>
        <CardList>
          {todos.map((item) => {
            return item.isDone === false ? (
              <Card
                key={item.id}
                todo={item}
                title={item.title}
                desc={item.desc}
              />
            ) : null;
          })}
        </CardList>
        <h1>Done</h1>
        <CardList>
          {todos.map((item) => {
            return item.isDone ? (
              <Card
                key={item.id}
                todo={item}
                title={item.title}
                desc={item.desc}
              />
            ) : null;
          })}
        </CardList>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;
  height: auto;
  margin: auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AddForm = styled.div`
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

export default Home;
