import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/team-lineup-animate.svg";
import { Container } from "./styles";
import { axiosInstance } from "../../AxiosInstance";
import useAuth from "../../hooks/useAuth";

function Login({ history }) {
  const { setSigned } = useAuth();
  const navigate = useNavigate();

  const [inputKey, setInputKey] = useState("");

  async function login(e, key) {
    e.preventDefault();
    if (!key) {
      alert("Informe a chave de login para prosseguir!");
      return;
    }
    await axiosInstance
      .get("status", {
        headers: {
          "x-rapidapi-key": key,
        },
      })
      .then((resp) => {
        if (resp.data?.response && resp.data.errors.length === 0) {
          localStorage.setItem("user_api_key", key);
          setSigned(true);
          navigate("/home");
        } else {
          alert("Chave de login inválida!");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  return (
    <Container>
      <div className="left-login">
        <h1>
          Faça login para visualizar <br /> informações do seu time
        </h1>
        <img src={LoginImage} alt="" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className="textfield">
            <label htmlFor="">Chave de autenticação</label>
            <input
              type="text"
              name="autenticationKey"
              placeholder="Chave de autenticação"
              required="required"
              value={inputKey}
              onChange={(e) => setInputKey(e.target?.value)}
            />
          </div>
          <button className="btn-login" onClick={(e) => login(e, inputKey)}>
            Login
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
