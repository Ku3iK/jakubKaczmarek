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
        color: ${({ theme }) => theme.color.text};
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }

    h1 {
        font-size: ${({ theme }) => theme.font.xl};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 900;
    }

    h2 {
        font-size: ${({ theme }) => theme.font.l};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 700;
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.m};
      }
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    p {
      width: 90%;
      font-size: ${({ theme }) => theme.font.m};
      margin: 40px 0;
      font-weight: 300;
      line-height: 45px;
      @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: ${({ theme }) => theme.font.s};
        line-height: 35px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.xs};
        line-height: 25px;
      }
    }

    button {
        font-family: ${({ theme }) => theme.font.name};
        color: ${({ theme }) => theme.color.text};
        font-size: ${({ theme }) => theme.font.s};
        border: none;
        background-image: linear-gradient(-45deg, #40a829, #006241);
        border-radius: 25px;
        padding: 10px 30px;
        transition: .3s;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            font-size: ${({ theme }) => theme.font.xs};
        }
    }

    main {
        max-width: 1600px;
        margin: 0 auto;
    }

    section {
        margin: 150px auto;
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            padding: 0 2rem;
        }
    }

    textarea, input{
        font-family: ${({ theme }) => theme.font.name};
    }

    .navigationIcon {
        width: 30px;
    }
    
`

export default GlobalStyle
