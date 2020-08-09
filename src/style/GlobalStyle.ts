import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
${reset};
* {
  box-sizing:border-box;
}
  body {
    background-color:#FAFAFA;
    color:#262626;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    margin-right:20%;
    hr {
        margin: 0;
    }
  }
  input:focus{
    outline:none;
  }
`;
