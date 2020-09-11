import React from 'react';
import styles from './Continent.module.css';
import { prettyPrintStat } from "../../utils";
import CloseIcon from "@material-ui/icons/Close";

const Continent = ({ name, image, data }) => {
  let overlay = document.getElementById("overlay");
  
  const openOverlay = () =>{
      overlay.style.display = 'flex';
  }
  const closeOverlay = () => {
    overlay.style.display = "none";
  };

  return (
    <div className={styles.continent__wraper}>
      <div onClick={openOverlay} className={styles.continent}>
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
      <div id="overlay" className={styles.continent__overlay}>
        <div className={styles.continent__overlay__data}>
          <div onClick={closeOverlay} className={styles.overlay__close__icon__wraper}>
            <CloseIcon className={styles.close__icon} />
          </div>
          <h1>overlay data</h1>
        </div>
      </div>
    </div>
  );
};

export default Continent;
