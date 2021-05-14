import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <h3>Dashboard</h3>
      <button onClick={() => signOut()}>Sair</button>
    </>
  );
}
