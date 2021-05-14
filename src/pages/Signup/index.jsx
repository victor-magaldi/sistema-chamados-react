import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

import logo from "../../assets/logo.png";
import styles from "./Signup.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { signUp } = useContext(AuthContext);

  function handleSubmit() {
    if (email && password && name) signUp(email, password, name);
  }
  return (
    <div className={styles.registerContainer}>
      <div className={styles.register}>
        <div className={styles.registerArea}>
          <img src={logo} alt="logo-register" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h1>Registrar</h1>
          <input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit">Cadastrar Conta</button>
        </form>
        <Link to="/" className={styles.linkCreateAccount}>
          Já tem uma conta?
        </Link>
      </div>
    </div>
  );
}

export default Signup;
