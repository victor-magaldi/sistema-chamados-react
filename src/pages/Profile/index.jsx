import React, { useContext, useState } from "react";
import styles from "./Profile.module.css";

import Header from "../../components/Header";
import Title from "../../components/Title";
import avatarDefault from "../../assets/avatar.png";

import { AuthContext } from "../../contexts/Auth";

import firebase from "../../services/firebaseConnection";

import { FiSettings } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

export default function Profile() {
  const { user, signOut, setUser, localStoraUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avataUrl, setAvatar] = useState(user && user.avataUrl);
  const [imgAvatar, setImgAvatar] = useState(null);

  function handleFile(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
    const image = e.target.files[0];
    if (image) {
      const ispngOrjpeg =
        image.type === "image/jpeg" || image.type === "image/png";
      if (ispngOrjpeg) {
        setImgAvatar(image);
        setAvatar(URL.createObjectURL(image));
      } else {
        alert("envie uma imagem do tipo PNG ou JPEG");
        setImgAvatar(null);
        setAvatar("");
        return null;
      }
    }
  }
  async function handleUpload() {}
  async function handleSave(e) {
    e.preventDefault();
    if (imgAvatar === null && name !== "") {
      await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .update({ name: name })
        .then(() => {
          let data = {
            ...user,
            name: name,
          };
          setUser(data);
          localStoraUser(data);
        });
      console.log(firebase);
    } else if (name !== "" && imgAvatar !== null) {
      handleUpload();
    }
  }
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Title name={"Meu Perfil"}>
          <FiSettings color="black" size="25"></FiSettings>
        </Title>

        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSave}>
            <label htmlFor="avatar" className={styles.labelAvatar}>
              <span>
                <FiUpload color="#fff" size={25}></FiUpload>
              </span>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleFile}
              />{" "}
              <br />
              <img src={avataUrl ? avataUrl : avatarDefault} alt="avatar" />
            </label>

            <label htmlFor="name">nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              disabled={true}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Salvar</button>
          </form>
        </div>
        <div className={styles.container}>
          <button className={styles.logoutBtn} onClick={() => signOut()}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
