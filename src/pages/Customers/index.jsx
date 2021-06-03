import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import styles from "./Customers.module.css";

import Title from "../../components/Title";
import Header from "../../components/Header";

import { FiUser } from "react-icons/fi";

export default function Customers() {
  const {} = useContext(AuthContext);
  const [nameFantasy, setNameFantasy] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [address, setAddres] = useState("");

  async function handleSave(e) {
    e.preventDefault();
    alert("salvo");
  }

  return (
    <>
      <Header />
      <div className={styles.containerCustomers}>
        <h2>Página de Clientes</h2>
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSave}>
            <label htmlFor="nameFantasy">nome</label>
            <input
              type="text"
              id="nameFantasy"
              placeholder="nome da sua empresa"
              value={nameFantasy}
              onChange={(e) => setNameFantasy(e.target.value)}
            />

            <label htmlFor="cnpj">cnpj</label>
            <input
              type="cnpj"
              id="cnpj"
              placeholder="cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />

            <label htmlFor="adress">Endereço</label>
            <input
              type="text"
              id="adress"
              placeholder="Endereço da sua empresa"
              value={address}
              onChange={(e) => setAddres(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
}
