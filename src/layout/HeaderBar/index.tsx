import React from "react";

import logo from "../../assets/logo.svg";
import styles from './index.module.css'

export default function HeaderBar() {
  return (
    <div className={styles.wrap}>
      <img src={logo} className={styles.logo} alt="logo" />

      <span className={styles.title}>位置上报 & 管理</span>
    </div>
  );
}
