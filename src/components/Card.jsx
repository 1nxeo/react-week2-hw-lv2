import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, doneTodo, updateTodo } from "../redux/modules/todos";
import styled from "styled-components";

function Card(props) {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState(props.title);
  const [editDesc, setEditDesc] = useState(props.desc);
  const [edit, setEdit] = useState(false);
  const updates = { editTitle, editDesc };

  return (
    <CardBox>
      {edit ? (
        <EditForm>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <div>
            <button
              onClick={(e) => {
                dispatch(updateTodo(props.todo, updates));
                setEdit((pre) => !pre);
              }}
            >
              save changes
            </button>
            <button
              onClick={() => {
                setEdit((pre) => !pre);
              }}
            >
              cancel
            </button>
          </div>
        </EditForm>
      ) : (
        <Content>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div>
            <Link to={`/details/${props.todo.id}`}>for more details...</Link>
          </div>
          <button
            onClick={() => {
              setEdit((pre) => !pre);
            }}
          >
            edit
          </button>
          <button onClick={(e) => dispatch(doneTodo(props.todo))}>
            {props.todo.isDone ? "cancel" : "finish"}
          </button>
          <button onClick={(e) => dispatch(deleteTodo(props.todo))}>
            delete
          </button>
        </Content>
      )}
    </CardBox>
  );
}

const CardBox = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid greenyellow;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  word-wrap: normal;
  width: 90%;
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Card;
