import React from "react";
import styles from "./Country.module.css";

const Country = ({ name, image, data }) => {
  const {active, deaths, recovered, cases} = data;  
  return (
    <div className={styles.country}>
      <div className={styles.country__image}>
        <img src={image} alt="flag" />
      </div>
      <div className={styles.country__numbers}>
        <ul>
          <li>TAMURT: {name}</li>
          <li>UṬṬUNEN URMIDEN: {active}</li>
          <li>WID YEMUTEN: {deaths}</li>
          <li>WID YEJJAN: {recovered}</li>
          <li>UṬṬUNEN AKIT: {cases}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
