import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #201b2c;

  & > div {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-login {
    flex-direction: column;

    h1 {
      font-size: calc(1.5vw + 1.5vh);
      color: #77ffc0;
    }

    img {
      width: 35vw;
    }
  }

  .card-login {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;

    h1 {
      color: #00ff88;
      font-weight: 800;
    }

    .textfield {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin: 10px 0px;

      label {
        color: #f0ffffde;
        margin-bottom: 10px;
      }

      input {
        width: 100%;
        border: none;
        border-radius: 10px;
        padding: 15px;
        background-color: #514869;
        color: #f0ffffde;
        font-size: 12pt;
        box-shadow: 0px 10px 40px #00000056;
        outline: none;

        &::placeholder {
          color: #f0ffff94;
        }
      }
    }

    .btn-login {
      width: 100%;
      padding: 16px 0px;
      margin: 25px;
      border: none;
      border-radius: 8px;
      outline: none;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 3px;
      color: #2b134b;
      background-color: #00ff88;
      cursor: pointer;
      box-shadow: 0px 10px 40px -12px #00ff8052;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    .card-login {
      width: 85%;
    }
  }

  @media only screen and (max-width: 600px) {
    .left-login {
      display: none;
    }
    .right-login {
      width: 100%;
      height: auto;
    }
  }
`;