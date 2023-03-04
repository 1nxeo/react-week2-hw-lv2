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
      <label>todo : </label>
      <input
        type="text"
        value={newTitle}
        required
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <label>plan : </label>
      <input
        type="text"
        value={newDesc}
        required
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
}

export default Form;
