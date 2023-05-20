import React, { useState } from "react";
import { Container } from "./styles";
import LoginImage from "../../assets/team-lineup-animate.svg";

function Login() {
  const [inputKey, setInputKey] = useState();

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
          <button className="btn-login">Login</button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
