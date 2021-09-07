import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/GlobalStyle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ full }) => full && '90vh'};
  .content {
    max-width: 80%;
  }
  @media (min-width: 800px) {
    height: ${({ full }) => full && '100vh'};
    padding-right: 4rem;
  }
`
const Heading = styled.h1`
  line-height: 1.1;
  letter-spacing: -2.5px;
  @media (min-width: 800px) {
    line-height: 1;
    font-size: 7.8rem;
  } ;
`
const Tag = styled.p`
  line-height: 1;
  font-size: 1.5rem;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 3rem;
  }
  color: ${({ theme }) => theme.gray};
`

const Hero = () => {
  return (
    <Container full>
      <div className="content">
        <Tag>Deepak Kumar</Tag>
        <Heading>Designer</Heading>
        <Heading>& Developer</Heading>
      </div>
      <Button to="/">Contact Me</Button>
    </Container>
  )
}

export default Hero
