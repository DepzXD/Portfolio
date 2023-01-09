import * as React from 'react'
import styled from 'styled-components'
import BongoCat from '../assets/BongoCat'

const AboutSecStyle = styled.section`
  padding: 1.5em;
  min-height: 100vh;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin-bottom: 3em;
    text-align: center;
    width: 100%;
  }
  @media (min-width: 800px) {
    max-width: 80%;
    margin: 0 auto;
    h2 {
      text-align: left;
      margin-bottom: 0.7em;
    }
  }
`
const TextBlock = styled.div`
  margin-top: 3em;

  p + p {
    padding-top: 0.6em;
  }
  @media (min-width: 800px) {
    order: -1;
    flex: 50% 2 2;
    margin: 0;
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    order: 1;
  }
`
const Container = styled.div`
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2em;
  }
`

const About = () => {
  return (
    <AboutSecStyle id="About">
      <h2>About me</h2>
      <Container>
        <BongoCat />
        <TextBlock>
          <p>
            Hi, I'm Deepak Kumar, a self-taught and passionate web developer
            from India.
          </p>
          <p>
            I am currently pursuing my Masters degree in Computer
            Applications(MCA) from VIT University. I have experience in
            designing and developing software for the web, from simple websites
            to full stack Applications.
          </p>
          <p>
            Outside of my studies, I am actively involved in the tech community
            and enjoy participating in hackathons and attending tech
            conferences. I am always looking for ways to improve my skills and
            knowledge in the field of software.
          </p>
        </TextBlock>
      </Container>
    </AboutSecStyle>
  )
}

export default About
