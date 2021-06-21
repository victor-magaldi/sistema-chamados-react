import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import styles from "./Dashboard.module.css";

import { FiMessageSquare, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Title from "../../components/Title";

export default function Dashboard() {
  const [calls, setCalls] = useState([]);
  console.log(setCalls);
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <Header />
      <div className={styles.containerDashboard}>
        <div className={styles.content}>
          <Title name="dashboard">
            <FiMessageSquare size={25} />
          </Title>
        </div>

        {calls.length === 0 ? (
          <section
            className={`
          texte
          ${styles.container}  
           ${styles.dashboard}`}
          >
            <span> Nenhum Chamado Registrado...</span>

            <Link to="/new" className={styles.new}>
              <FiPlus size={25} color="#fff" />
              Novo Chamado
            </Link>
          </section>
        ) : (
          <>
            {" "}
            <Link to="/new" className={styles.new}>
              <FiPlus size={25} color="#fff" />
              Novo Chamado
            </Link>{" "}
          </>
        )}

        <button onClick={() => signOut()}>Sair</button>
      </div>
    </>
  );
}
