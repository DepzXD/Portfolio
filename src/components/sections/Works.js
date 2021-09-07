import * as React from 'react'
import styled from 'styled-components'
import Portfolio from '../projects/Portfolio'
import Rein from '../projects/Rein'
import RudeWallet from '../projects/RudeWallet'
import WereCat from '../projects/WereCat'

const WorkSecStyles = styled.section`
  max-width: 80%;
  margin: 0 auto;
  h2 {
    margin-bottom: 3rem;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 800px) {
    padding: 3em 1.5em;
    h2 {
      text-align: left;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
`

const Works = () => {
  return (
    <WorkSecStyles>
      <h2>Works</h2>
      <Container>
        <Portfolio />
        <Rein />
        <WereCat />
        <RudeWallet />
      </Container>
    </WorkSecStyles>
  )
}

export default Works
