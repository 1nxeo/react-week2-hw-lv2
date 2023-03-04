import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
    font-family: 'NeoDunggeunmoPro-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

    font-family: 'NeoDunggeunmoPro-Regular' , sans-serif;
    line-height: 1.5;
    width: 100%;
  }
`;

export default GlobalStyle;
