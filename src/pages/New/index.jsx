import React from "react";
import Title from "../../components/Title";
import Header from "../../components/Header";

import { FiPlusCircle } from "react-icons/fi";

import styles from "./New.module.css";
import { div } from "prelude-ls";

export default function indes() {
  return (
    <div className={styles.containerNewCall}>
      <div className={styles.content}>
        <Header />

        <Title name="Novo chamado">
          <FiPlusCircle size={25} />
        </Title>
        <div className={styles.container}>
          <form onSubmit className={styles.form}>
            <label>Cliente</label>
            <select>
              <option value="1" key={1}>
                Sujeito Programador
              </option>
            </select>

            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>
              <option value="Visita Técnica">Visita Técnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
