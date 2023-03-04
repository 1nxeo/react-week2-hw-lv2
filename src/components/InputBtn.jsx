import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;

  /* 크기 */
  height: 25px;
  font-size: 1rem;

  /* 색상 */
  background: gray;
  &:hover {
    background: blueviolet;
  }
  &:active {
    background: blueviolet;
  }
  @font-face {
    font-family: "NeoDunggeunmoPro-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "NeoDunggeunmoPro-Regular", sans-serif;

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function InputBtn({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default InputBtn;
