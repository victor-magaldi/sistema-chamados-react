import React from "react";
import Title from "../../components/Title";
import Header from "../../components/Header";

import { FiPlusCircle } from "react-icons/fi";

import styles from "./New.module.css";

export default function New() {
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
                Otaviano Victorino
              </option>
            </select>

            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>
              <option value="Visita Técnica">Visita Técnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>status</label>
            <div className={styles.status}>
              <input
                type="radio"
                name="status"
                value="aberto"
                id="aberto"
                // onChange={}
              />
              <label htmlFor="aberto">aberto</label>

              <input
                type="radio"
                name="status"
                value="progresso"
                id="progresso"
                // onChange={}
              />
              <label htmlFor="progresso">progresso</label>

              <input
                type="radio"
                name="status"
                value="atendido"
                id="atendido"
                // onChange={}
              />
              <label htmlFor="atendido">atendido</label>
            </div>
            <label>Complemento</label>
            <textarea
              rows={8}
              placeholder="Descreva seu problema! (opcional)"
            />

            <button type="submit"> Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
