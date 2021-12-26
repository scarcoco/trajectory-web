import { Popover } from "@arco-design/web-react";
import { IconInfoCircle } from "@arco-design/web-react/icon";
import React, { CSSProperties, ReactNode } from "react";
import styles from "./index.module.css";

interface PageListProps {
  style?: CSSProperties;
  className?: string;
  title?: ReactNode;
  help?: ReactNode;
  extra?: ReactNode;
}

const PageList: React.FC<PageListProps> = ({
  style,
  className,
  title,
  help,
  extra,
  children,
}) => {
  return (
    <div className={`${className} ${styles.list}`} style={style}>
      {!!title && <div className={styles.header}>
        <div className={styles.title}>
          {title}
          {help && (
            <Popover content={help}>
              <IconInfoCircle className={styles.help} />
            </Popover>
          )}
        </div>

        {extra}
      </div>}
      {children}
    </div>
  );
};

export default PageList;
