import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => (props.whiteColor ? "white" : "black")};
  }
`;

export default GlobalStyle;
