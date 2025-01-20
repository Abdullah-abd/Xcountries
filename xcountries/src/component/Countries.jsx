import React from "react";
import styles from "./Countries.module.css"
export default function Countries({Data}) {
  return (
    <div
      className={styles.countryCard}
    >
      <div>
        <img
          src={Data.png}
          alt="country_flag"
          style={{ width: "100px", height: "100px",  }}
        />
      </div>
      <h3>{Data.common}</h3>
    </div>
  );
}
