import React from "react";
import styles from "../styles/card.module.css";
const Card = ({ item, children, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {item}
      {children}
    </div>
  );
};

export default Card;
