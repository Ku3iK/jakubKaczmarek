import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoIcon from "../../assets/icons/logo.svg"
import NavElements from "./NavElements"

const Navigation = ({ routes }) => {
  return (
    <Container>
      <div className="logoContainer">
        <Link to="/">
          <img
            className="navigationIcon logoIcon"
            src={LogoIcon}
            alt="Logo Jakub Kaczmarek"
          />
          <h1>Kaczmarek</h1>
        </Link>
      </div>
      <div className="navElements">
        <NavElements routes={routes} />
        <button>Kontakt</button>
      </div>
    </Container>
  )
}

export default Navigation

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  background-color: transparent;
  max-width: 1600px;
  .logoContainer {
    a {
      display: flex;
      align-items: center;
    }
    .logoIcon {
      width: 50px;
    }
  }

  .navElements {
    display: flex;
    align-items: center;
    ul {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      margin: 0 20px;

      li {
        margin: 0 20px;
      }
    }
    button {
      background-color: transparent;
      background-image: none;
      border: 2px solid ${({ theme }) => theme.color.text};
    }
    button:hover {
      background-color: ${({ theme }) => theme.color.text};
      color: ${({ theme }) => theme.color.background};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    align-items: flex-start;
    .navElements ul {
      flex-direction: column;
      li {
        padding: 5px 0;
      }
    }
    button {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    .logoContainer {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .navElements {
      width: 100%;
      ul {
        flex-direction: row;
        justify-content: center;
        margin: 1.2rem auto;
      }
    }
  }
`
