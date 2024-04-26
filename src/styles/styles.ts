import { createGlobalStyle } from "styled-components";

const Theme = {};

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
  }
`;

export default Theme;
