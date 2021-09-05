import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from '../styles/Theme'
import GlobalStyle from '../styles/GlobalStyle'
import Head from './Head'

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <Head title={title} description={description} image={image} />
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
