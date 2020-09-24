import React from "react"
import theme from "../themes/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../themes/GlobalStyle"
import routes from "./paths"
import Navigation from "../components/Navigation/Navigation"
import Header from "../components/Header/Header"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation routes={routes} />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
