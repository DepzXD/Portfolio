import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ full }) => full && '90vh'};

  @media (min-width: 700px) {
    height: ${({ full }) => full && '100vh'};
    padding-right: 4rem;
  } ;
`
const Heading = styled.h1`
  line-height: 1.1;
  letter-spacing: -2.5px;
  @media (min-width: 700px) {
    line-height: 1;
    font-size: 7.8rem;
  } ;
`
const Tag = styled.p`
  line-height: 1;
  font-size: 1.5rem;
  font-weight: 400;
  @media (min-width: 700px) {
    font-size: 3rem;
  }
  color: ${({ theme }) => theme.gray};
`
const Button = styled(Link)`
  border: solid 4px ${({ theme }) => theme.aqua};
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.6em 1em;
  color: ${({ theme }) => theme.aqua};
  font-weight: 600;
  margin-top: 2.5em;
  @media (min-width: 700px) {
    font-size: 1.3rem;
  }
`

const Hero = () => {
  return (
    <Container full>
      <div>
        <Tag>Deepak Kumar</Tag>
        <Heading>Designer</Heading>
        <Heading>& Developer</Heading>
      </div>
      <Button to="/">Contact Me</Button>
    </Container>
  )
}

export default Hero
