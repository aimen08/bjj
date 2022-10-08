import React from "react";
import styles from "./style.module.css";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="grid  place-content-center">
      <svg className={styles.spinner} viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18"></circle>
      </svg>
    </div>
  );
}
