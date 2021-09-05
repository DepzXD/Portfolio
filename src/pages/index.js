import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const Container = styled.div`
  @media (min-width: 700px) {
    display: flex;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Nav />
        <Hero />
      </Container>
    </Layout>
  )
}

export default IndexPage
