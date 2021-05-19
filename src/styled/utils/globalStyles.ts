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
  
  --logo-color: #c26ea9;
  --cart-link: #c90ea5;

  --half-transparent-white-color: rgba(255, 255, 255, 0.5);

  --white-color: #fff;
  --black-color: #212121;
  --pink-color: #ff1876;

}

  body {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    background-color: var(--main-bg-color);

    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: var(--main-text-color);

    @media print {
      background-color: var(--white-color);
    }
  }

  a {
    color: inherit
    }

  .navlink{
    color: var(--accent-text-color)
  }
    .navlink.active{
      color: var(--main-text-color);
    }
`;

export default GlobalStyle;
