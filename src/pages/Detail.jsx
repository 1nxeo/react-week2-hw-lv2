import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector((state) => state.todos);
  const foundData = todos.find((item) => {
    return item.id === parseInt(params.id);
  });

  return (
    <>
      <h3>{foundData.id}</h3>
      <h4>{foundData.title}</h4>
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
