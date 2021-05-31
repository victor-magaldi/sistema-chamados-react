import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import styles from "./Customers.module.css";

import Header from "../../components/Header";

export default function Customers() {
  const { signOut } = useContext(AuthContext);
  console.log(signOut);
  return (
    <>
      <Header />
      <div className={styles.containerCustomers}>
        <h2>Página de Clientes</h2>
      </div>
    </>
  );
}
