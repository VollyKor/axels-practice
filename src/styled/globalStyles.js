import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  /* bootstrap variable */
  --primary :  #5f2093;

  /* app variables */
  --main-bg-color: #E6E9F0;
  --accent-bg-color: #F1F3F6;

  --main-text-color: #5B1195;
  --accent-text-color : #808181;

  --cart-link: #c90ea5;

  --black-color: #212121;
  --pink-color: #ff1876;

  /* doesn't work */
  --breakpoint-xs: 0px;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
}

  body {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    background-color: var(--main-bg-color);

    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: var(--main-text-color);
  }

  a {
    color: inherit
    }
`;

export default GlobalStyle;

// --primary  main-text-color: #5B1195;
// accent-text-color : $e6e9f0
// muted-color:
// black-color: $2f2929;
// white-color
