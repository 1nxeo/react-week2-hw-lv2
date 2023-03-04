import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/modules/todos";
import styled from "styled-components";

function Form() {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const dispatch = useDispatch();
  const newTodo = { newTitle, newDesc };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addNewTodo(newTodo));
        setNewTitle("");
        setNewDesc("");
      }}
    >
      <Addform>
        <Input>
          <label>todo : </label>
          <input
            type="text"
            value={newTitle}
            required
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Input>
        <Input>
          <label>plan : </label>
          <input
            type="text"
            value={newDesc}
            required
            onChange={(e) => setNewDesc(e.target.value)}
          />
        </Input>
        <Input>
          <input type="submit" value="Add Todo" />
        </Input>
      </Addform>
    </form>
  );
}

const Addform = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
`;

const Input = styled.div`
  margin: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Form;
