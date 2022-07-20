import {createGlobalStyle} from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}
  :focus {
  outline: none;
  border: none;
}
::-webkit-scrollbar {
  display: none;
}
button {
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
}
a {
  text-decoration: none;
  color:inherit;
}
h1, h2, h3, h4, h5, h6, p, span, a {
  margin : 0;
}
* {
  box-sizing: border-box;
  font-family: 'Syne', sans-serif;
  line-height: normal;
  letter-spacing: normal;
}
`