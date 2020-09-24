import React from "react"
import Banner from "../../assets/images/Programming-amico.svg"
import BannerBackground from "../../assets/images/backgrounds/headerBackground.svg"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderContainer>
      <img src={BannerBackground} alt="Banner background" />
      <div>
        <h2>Cześć, tu Kuba!</h2>
        <p>
          Jestem młodym kreatywnym chłopakiem z pasją do tego, czym się zajmuje.
          Specjalizuję się w tworzeniu aplikacji webowych dla klientów, osób
          prywatnych i firm. Chętnie podejmuję się "niemożliwego" i zrobię
          wszystko żeby to właśnie Twoja strona była tą wyjątkową.
        </p>
        <button>Zobacz więcej</button>
      </div>
      <div></div>
      <button className="hiddenButton">Zobacz więcej</button>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 800px;
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  img {
    position: absolute;
    top: -2%;
    right: -2%;
    z-index: -1;
  }
  div {
    width: 50%;
  }
  button {
    background-image: linear-gradient(-45deg, #40a829, #006241);
    border: none;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 15px 35px;
  }
  .hiddenButton {
    display: none;
  }
  div:nth-of-type(2) {
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: center center;
    background-origin: inherit;
    width: 50vw;
    height: 50vh;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 90%;
    img {
      top: -5%;
      right: -15%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    flex-direction: column;
    width: 80%;
    img {
      display: none;
    }
    button {
      display: none;
    }
    div {
      width: 100%;
    }
    .hiddenButton {
      display: block;
      margin: 40px 0;
    }
    div:nth-of-type(2) {
      width: 60vw;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    div:nth-of-type(2) {
      width: 70vw;
    }
  }
`
