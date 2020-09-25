import React from "react"
import styled from "styled-components"
import ContactImage from "../../assets/images/ContactImage.svg"
import ContactBackground from "../../assets/images/backgrounds/contactBackground.svg"

const Form = () => {
  return (
    <FormWrapper>
      <img src={ContactBackground} alt="Contact background" />
      <div>
        <p>Jeśli interesuje Cię współpraca</p>
        <h2>Napisz do mnie!</h2>
        <div className="contactImage"></div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="text" name="title" id="title" placeholder="Tytuł" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea
            name="content"
            id="content"
            placeholder="Twoja wiadomość..."
          ></textarea>
          <button type="submit">Wyślij</button>
        </form>
      </div>
      <div className="contactImage"></div>
    </FormWrapper>
  )
}

export default Form

const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    top: -18%;
    right: -22%;
    z-index: -1;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-self: center;
    p {
      margin: 0;
    }
    h2 {
      text-transform: inherit;
    }
    form {
      width: 100%;
      input,
      textarea {
        display: block;
        width: 55%;
        border: none;
        background-color: ${({ theme }) => theme.color.inputsColor};
        padding: 1.5rem 3rem;
        border-radius: 25px;
        margin: 3rem 0;
        color: ${({ theme }) => theme.color.primary};
        font-size: ${({ theme }) => theme.font.s};
      }
      textarea {
        width: 80%;
        height: 300px;
        resize: none;
      }
    }
  }
  .contactImage {
    background-image: url(${ContactImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-origin: inherit;
    width: 50vw;
    height: 50vh;
  }

  .contactImage:nth-of-type(1) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    flex-direction: column;
    img {
      display: none;
    }
    div {
      width: 80%;
      flex-basis: auto;
    }
    .contactImage {
      display: none;
      margin-top: 50px;
    }
    .contactImage:nth-of-type(1) {
      display: block;
      width: 60vw;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    div {
      width: 90%;
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        input,
        textarea {
          width: 100%;
          margin: 2rem 0;
        }
        button {
          width: 50%;
        }
      }
    }
    .contactImage:nth-of-type(1) {
      width: 70vw;
    }
  }
`
