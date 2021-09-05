import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", sans-serif;
    background-color: ${({ theme }) => theme.darkNavy};
    color: ${({ theme }) => theme.white};
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
  
  h1,h2,h3,h4,p,a {
    margin: 0;
    line-height: 1.3;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`

export default GlobalStyle
