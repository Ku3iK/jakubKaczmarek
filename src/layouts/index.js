import React from "react"
import theme from "../themes/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../themes/GlobalStyle"
import routes from "./paths"
import routesAlternative from "./pathsAlternative"
import Navigation from "../components/Navigation/Navigation"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation routes={routes} />
      <Header />
      <main>{children}</main>
      <Footer routes={routesAlternative} />
    </ThemeProvider>
  )
}

export default Layout
