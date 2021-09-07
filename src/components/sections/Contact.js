import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/GlobalStyle'

const ContactStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  @media (min-width: 800px) {
    padding-right: 4rem;
  }
`
const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  p {
    max-width: 60%;
    margin: 0 auto;
  }
  a {
    margin-top: 2rem;
  }
`

const Contact = () => {
  return (
    <ContactStyle>
      <Container>
        <h2>Let's Connect</h2>
        <p>
          have a project you'd like to discuss or just want to say hi ? feel
          free to drop a message!
        </p>
        <Button to="/">Get in Touch</Button>
      </Container>
    </ContactStyle>
  )
}

export default Contact
