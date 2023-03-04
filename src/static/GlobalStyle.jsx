import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
    font-family: 'Ansungtangmyun-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ansungtangmyun-Bold.woff2') format('woff2');
    /* font-weight: normal;
    font-style: normal; */
}
    font-family: 'Ansungtangmyun-Bold' , sans-serif;
    line-height: 1.5;
    max-width: 1200px;
    min-height: 800px;
  }
`;

export default GlobalStyle;
