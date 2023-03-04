import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyle from "../static/GlobalStyle";
import styled from "styled-components";

import Button from "../components/Button";

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
      <DetailWrapper>
        <DetailContent>
          <h2>{foundData.id}</h2>
          <h2>{foundData.title}</h2>
          <p>{foundData.desc}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </DetailContent>
      </DetailWrapper>
    </>
  );
}

const DetailWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 70%;
`;

export default Detail;
