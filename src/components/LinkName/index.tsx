import React from 'react'
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export interface LinkNameProps {
  text: string;
  to: string;
}
const LinkName: React.FC<LinkNameProps> = ({ text, to }) => {
  return <Link className={styles.name} to={to}>{text}</Link>
}
export default LinkName;
