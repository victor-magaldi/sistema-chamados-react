import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import styles from "./Customers.module.css";

import Title from "../../components/Title";
import Header from "../../components/Header";

import { FiUser } from "react-icons/fi";
import {toast} from "react-toastify"

import firebase from "../../services/firebaseConnection"

export default function Customers() {
  const {} = useContext(AuthContext);
  const [nameFantasy, setNameFantasy] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [address, setAddres] = useState("");

  async function handleSave(e) {
    e.preventDefault();
    if (nameFantasy !=="" && cnpj !=="" && address !==""){
      await firebase.firestore().collection('customers').add({
        nameFantasy:nameFantasy,
        cnpj:cnpj,
        address: address
      }).then(()=>{
        setNameFantasy("")
        setCnpj("")
        setAddres("")
        toast.info("empresa cadastrada com sucesso")
      }).catch((error)=>{
        toast.error("ocorreu algum erro, tente novamente mais tarde")
        console.log(error)
      })
    }else{
      toast.error("Preencha todos os campos para cadastrar a empresa")

    }
  }

  return (
    <>
      <Header />
      <div className={styles.containerCustomers}>
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
