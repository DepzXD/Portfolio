import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

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
    line-height: 1.65;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
  a:hover,
  a:focus {
    color: ${({ theme }) => theme.aqua};
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 7.8rem
    }
    h2 {
      font-size: 3.9rem;
    }
    h3 {
      font-size: 2.7rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`

export const Button = styled(Link)`
  border: solid 4px ${({ theme }) => theme.aqua};
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.6em 1em;
  color: ${({ theme }) => theme.aqua};
  font-weight: 600;
  margin-top: 2.5em;
  @media (min-width: 800px) {
    font-size: 1.3rem;
  }
`

export default GlobalStyle
