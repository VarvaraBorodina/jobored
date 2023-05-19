import { createGlobalStyle } from 'styled-components';
import "@fontsource/inter";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 24px;
    font-family: Inter;

    @media (max-width: 540px) {
      font-size: 20px;
    }

    @media (max-width: 320px) {
      font-size: 16px;
    }
  }
body {
  background-color: #F5F5F5
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
`