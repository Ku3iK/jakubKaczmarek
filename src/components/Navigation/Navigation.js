import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoIcon from "../../assets/icons/logo.svg"

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
      <div>
        <ul>
          {routes.map(({ icon, path }, index) => (
            <li key={index}>
              <Link to={path}>
                <img className="navigationIcon" src={icon} alt="Ikona" />
              </Link>
            </li>
          ))}
        </ul>
        <button>Kontakt</button>
      </div>
    </Container>
  )
}

export default Navigation

const Container = styled.main`
  display: flex;
  justify-content: space-between;

  .logoContainer {
    a {
      display: flex;
      align-items: center;
    }
    .logoIcon {
      width: 100px;
    }
  }

  div {
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
    button:hover {
      background-color: ${({ theme }) => theme.color.text};
      color: ${({ theme }) => theme.color.background};
    }
  }
`
