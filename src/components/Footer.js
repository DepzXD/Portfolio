import * as React from 'react'
import styled from 'styled-components'
import { Twitter, GitHub, Codepen } from 'react-feather'

const FooterStyles = styled.footer`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 800px) {
    padding-right: 4rem;
  }
`
const SocialLinks = styled.footer`
  a + a {
    margin-left: 1em;
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <SocialLinks>
        <a href="https://twitter.com/DepzXD" target="_blank">
          <Twitter />
        </a>
        <a href="http://github.com/depzXD" target="_blank">
          <GitHub />
        </a>
        <a href="https://codepen.io/DepzXD/" target="_blank">
          <Codepen />
        </a>
      </SocialLinks>
      <p>© 2020 - 2021 Deepak Kumar. All Rights Reserved.</p>
    </FooterStyles>
  )
}

export default Footer
