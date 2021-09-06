import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'

const Container = styled.div`
  @media (min-width: 800px) {
    display: flex;
  }
  .wrapper {
    width: 100%;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Nav />
        <div className="wrapper">
          <Hero />
          <About />
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
