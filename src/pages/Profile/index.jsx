import React, { useContext, useState } from "react";
import styles from "./Profile.module.css";

import Header from "../../components/Header";
import Title from "../../components/Title";
import avatar from "../../assets/avatar.png";

import { AuthContext } from "../../contexts/Auth";

import { FiSettings } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

export default function Profile() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avataUrl, setAvatar] = useState(user && user.avataUrl);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Title name={"Meu Perfil"}>
          <FiSettings color="black" size="25"></FiSettings>
        </Title>

        <div className={styles.container}>
          <form className={styles.form}>
            <label htmlFor="avatar" className={styles.labelAvatar}>
              <span>
                <FiUpload color="#fff" size={25}></FiUpload>
              </span>
              <input type="file" name="avatar" accept="image/*" /> <br />
              {avataUrl === null ? (
                <img src={avatar} alt="avatar" width={250} height={250} />
              ) : (
                <img src={avataUrl} alt="avatar" width={250} height={250}></img>
              )}
            </label>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
