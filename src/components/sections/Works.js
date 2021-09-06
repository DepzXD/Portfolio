import * as React from 'react'
import styled from 'styled-components'
import Project from '../Project'

const WorkSecStyles = styled.section`
  padding: 1.5em;
  max-width: 85%;
  margin: 0 auto;
  h2 {
    margin-bottom: 3rem;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 800px) {
    h2 {
      text-align: left;
    }
  }
`

const Works = () => {
  return (
    <WorkSecStyles>
      <h2>Works</h2>
      <Project />
    </WorkSecStyles>
  )
}

export default Works
