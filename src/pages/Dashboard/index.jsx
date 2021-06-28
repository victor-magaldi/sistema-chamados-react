import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import styles from "./Dashboard.module.css";

import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Title from "../../components/Title";

export default function Dashboard() {
  const [calls, setCalls] = useState([1]);
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
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Assunto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cadastrado em</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="cliente">Sujeito</td>
                  <td data-label="assunto">suporte</td>
                  <td data-label="status">
                    <span
                      style={{ backgroundColor: "green" }}
                      className={styles.badge}
                    >
                      Em aberto
                    </span>
                  </td>
                  <td data-label="cadastrado">20/06/2021</td>
                  <td data-label="#">
                    <button
                      className={styles.action}
                      style={{ backgroundColor: "#3583f3" }}
                    >
                      <FiSearch color="#fff" size={17} />
                    </button>
                    <button
                      className={styles.action}
                      style={{ backgroundColor: "#f6a935" }}
                    >
                      <FiEdit2 color="#fff" size={17} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        <button onClick={() => signOut()}>Sair</button>
      </div>
    </>
  );
}
