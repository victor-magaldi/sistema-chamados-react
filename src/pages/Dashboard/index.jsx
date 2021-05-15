import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

import Header from "../../components/Header";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <Header />
      <h3>Dashboard</h3>
      <button onClick={() => signOut()}>Sair</button>
    </>
  );
}
