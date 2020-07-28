import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => (props.whiteColor ? "white" : "black")};
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    margin-right:20%;
    hr {
        margin: 0;
    }
  }
`;

export default GlobalStyle;
