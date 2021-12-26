import React from "react";
import { Spin } from "@arco-design/web-react";
import styles from './index.module.css'

export default function Loading() {
  return <Spin className={styles.spin} />
}
