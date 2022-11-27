import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
}

@font-face {
  font-family: 'Raleway';
  src: url("fonts/Raleway-VariableFont_wght.ttf");
  font-weight: 100;
}

@font-face {
  font-family: 'Questrial';
  src: url("fonts/Questrial-Regular.ttf");
  font-weight: 100;
}
`;

export default GlobalStyles;