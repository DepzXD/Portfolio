import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = (props) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
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
  const defaults = data?.site?.siteMetadata
  const title = props.title || defaults.title
  const description = props.description || defaults.description
  const siteUrl = new URL(props.siteUrl || '/', defaults.siteUrl)
  const image = props.image || defaults.image

  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en" />
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/DepzXD/PortfolioOld/master/static/favicon.ico"
      />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta name="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}

export default Head
