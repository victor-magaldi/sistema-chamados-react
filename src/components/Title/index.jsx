import React from "react";
import styles from "./Title.module.css";

export default function Title({ children, name }) {
  return (
    <div className={styles.title}>
      {children}
      <span>{name}</span>
    </div>
  );
}
