import React, { ReactNode } from "react";
import styles from "./index.module.css";
interface PanelProps {
  title: ReactNode;
  extra?: ReactNode;
}
const Panel: React.FC<PanelProps> = ({ title, extra, children }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <div className={styles.title}>{title}</div>
        {extra}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Panel;
