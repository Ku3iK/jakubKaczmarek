import React from "react"
import styled from "styled-components"
import BackgroundFooter from "../../assets/images/backgrounds/footerBackground.svg"
import LogoIcon from "../../assets/icons/logo.svg"
import NavElements from "../Navigation/NavElements"

const Footer = ({ routes }) => {
  return (
    <FooterContainer>
      <img
        src={BackgroundFooter}
        alt="Background footer section"
        className="footerBackground"
      />
      <div>
        <img className="logoIcon" src={LogoIcon} alt="Logo Jakub Kaczmarek" />
        <h3>Jakub Kaczmarek</h3>
        <div className="navElements">
          <NavElements routes={routes} />
        </div>
        <p>© 2020 All rights reserved.</p>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  min-height: 600px;
  position: relative;
  .footerBackground {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-5%);
    z-index: -1;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    .logoIcon {
      width: 60px;
      margin: 2rem auto;
    }
    .navElements {
      display: flex;
      align-items: center;
      width: 100%;
      ul {
        width: 50%;
        display: flex;
        justify-content: center;
        margin: 0 2rem;
        li {
          margin: 20px;
          color: ${({ theme }) => theme.color.black};
        }
      }
    }
  }
  p {
    font-size: ${({ theme }) => theme.font.footerParagraph};
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.medium};
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    height: auto;
    min-height: auto;
    margin: 0 auto 5rem;
    .footerBackground {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    p {
      font-size: ${({ theme }) => theme.font.xs};
    }
  }
`
