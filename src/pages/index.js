import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Works from '../components/sections/Works'
import Contact from '../components/sections/Contact'
import Footer from '../components/Footer'

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
          <Works />
          <Contact />
          <Footer />
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
