import styles from "./Header.module.css";
import { useContext } from "react";

import { AuthContext } from "../../contexts/Auth";

import avatarDefault from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.sideBar}>
      <span>{user.name}</span>
      <span>{user.email}</span>
      <img
        src={user.avatarUrl ? user.avatarUrl : avatarDefault}
        alt="avatar-img"
      />
      Header
      <Link to="/dashboard">
        <FiHome color="black" size="24" />
        chamados
      </Link>
      <Link to="/dashboard">
        <FiUser color="black" size="24" />
        Clientes
      </Link>
      <Link to="/dashboard">
        <FiSettings color="black" size="24" />
        Configurações
      </Link>
    </div>
  );
}
