import React, { CSSProperties, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export interface LinkNameProps {
  text: string;
  to?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}
const LinkName: React.FC<LinkNameProps> = ({
  text,
  to,
  style,
  className,
  onClick,
}) => {
  const handleClick = onClick ? (evt: SyntheticEvent) => {
    evt.preventDefault();
    onClick?.();
  } : undefined
  return (
    <Link
      className={`${styles.name} ${className || ""}`}
      style={style}
      onClick={handleClick}
      to={to || ""}
    >
      {text}
    </Link>
  );
};
export default LinkName;
