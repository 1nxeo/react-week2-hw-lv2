import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyle from "../static/GlobalStyle";

function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector((state) => state.todos);
  const foundData = todos.find((item) => {
    return item.id === parseInt(params.id);
  });

  return (
    <>
      <GlobalStyle />
      <h2>{foundData.id}</h2>
      <h2>{foundData.title}</h2>
      <p>{foundData.desc}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </>
  );
}

export default Detail;
