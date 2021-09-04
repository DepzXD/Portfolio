import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Head from './Head'

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
}) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `)
  const meta = data?.site?.siteMetadata
  return (
    <>
      <Head title={title} description={description} image={image} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout