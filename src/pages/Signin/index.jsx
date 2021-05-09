import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./Signin.module.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {
    alert("submetido");
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <div className={styles.loginArea}>
          <img src={logo} alt="logo-login" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Acessar</button>
        </form>
        <Link to="/register" className={styles.linkCreateAccount}>
          Criar uma conta
        </Link>
      </div>
    </div>
  );
}

export default Signin;
