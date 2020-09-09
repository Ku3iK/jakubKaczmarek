import React from "react"
import theme from "../themes/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../themes/GlobalStyle"
import routes from "./paths"
import Navigation from "../components/Navigation/Navigation"

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation routes={routes} />
    </ThemeProvider>
  )
}

export default Layout
