import React from 'react';
import styles from './Continent.module.css';
import { prettyPrintStat } from "../../utils";


// {name, image, data:{ cases, recovered, deaths }}
const Continent = ({ name, image, data }) => {
  return (
    <div className={styles.continent}>
      <h4 className={styles.continent__title}>{name}</h4>
      <div className={styles.continent__image}>
        <img src={image} alt="continentMap" />
      </div>
      <div className={styles.continent__stats}>
        <div className={styles.continent__numbers}>
          <p>Wid Yuḍnen</p>
          <p className={styles.number}>{prettyPrintStat(data?.cases)}</p>
        </div>
        <div className={styles.continent__numbers}>
          <p>Wid Yejjan</p>
          <p className={styles.number}>{prettyPrintStat(data?.recovered)}</p>
        </div>
        <div className={styles.continent__numbers}>
          <p>Wid Yemuten</p>
          <p className={styles.number}>{prettyPrintStat(data?.deaths)}</p>
        </div>
      </div>
    </div>
  );
};

export default Continent;
