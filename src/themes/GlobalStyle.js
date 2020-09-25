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

    *:focus {
        outline: 1px solid ${({ theme }) => theme.color.primary};
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
        font-weight: ${({ theme }) => theme.font.black};
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.font.m};
        }
    }

    h2 {
        font-size: ${({ theme }) => theme.font.l};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: ${({ theme }) => theme.font.bold};
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: ${({ theme }) => theme.font.m};
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.font.s};
        }
    }

    h3 {
        font-size: ${({ theme }) => theme.font.l};
        text-transform: uppercase;
        font-weight: ${({ theme }) => theme.font.medium};
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.font.s};
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
      margin: 4rem 0;
      font-weight: ${({ theme }) => theme.font.thin};
      line-height: 4.5rem;
      @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: ${({ theme }) => theme.font.s};
        line-height: 3.5rem;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.xs};
        line-height: 2.5rem;
      }
    }

    button {
        font-family: ${({ theme }) => theme.font.name};
        color: ${({ theme }) => theme.color.text};
        font-size: ${({ theme }) => theme.font.s};
        border: none;
        background-image: linear-gradient(-45deg, #40a829, #006241);
        border-radius: 2.5rem;
        padding: 1rem 3rem;
        transition: .3s;
        text-transform: uppercase;
        font-weight: ${({ theme }) => theme.font.bold};
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
        margin: 20rem auto;
        width: 100%;
        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            width: 90%;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            width: 80%;
            padding: 0 2rem;
            margin: 10rem auto;
        }
    }

    textarea, input{
        font-family: ${({ theme }) => theme.font.name};
    }

    .navigationIcon {
        width: 3rem;
    }
    
`

export default GlobalStyle
