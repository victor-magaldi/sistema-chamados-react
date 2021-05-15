import React from "react";
import styles from "./Profile.module.css";

import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiSettings } from "react-icons/fi";

export default function Profile() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Title name={"Meu Perfil"}>
          <FiSettings color="black" size="25"></FiSettings>
        </Title>
      </div>
    </div>
  );
}
