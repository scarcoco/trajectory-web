import React, { ReactNode } from "react";
import styles from "./index.module.css";
interface DashboardProps {
  title: ReactNode;
  extra?: ReactNode;
}
const Dashboard: React.FC<DashboardProps> = ({ title, extra, children }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.head}>
        <div className={styles.title}>{title}</div>
        {extra}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Dashboard;
