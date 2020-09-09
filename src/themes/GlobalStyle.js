import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.font.name};
        background-color: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text}
    }

    html {
        font-size: 62.5%;
    }

    h1 {
        font-size: ${({ theme }) => theme.font.xl};
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font-family: ${({ theme }) => theme.font.name};
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.color.text};
        font-size: 2.4rem;
        border: 2px solid ${({ theme }) => theme.color.text};
        border-radius: 15px;
        padding: 10px 40px;
        transition: .3s;
        text-transform: uppercase;
    }

    main {
        max-width: 1600px;
        margin: 0 auto;
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            padding: 0 2rem;
        }
    }

    textarea, input{
        font-family: ${({ theme }) => theme.font.name};
    }

    .navigationIcon {
        width: 40px;
    }
    
`

export default GlobalStyle
