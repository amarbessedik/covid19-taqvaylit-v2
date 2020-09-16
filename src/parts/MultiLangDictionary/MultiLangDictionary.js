import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "./MultiLangDictionary.module.css";
import English from "./English";
import French from "./French";
import Arabic from "./Arabic";

function MultiLangDictionary() {
  const [french, setFrench] = useState(false);
  const [english, setEnglish] = useState(true);
  const [arabic, setArabic] = useState(false);

  const handleKabyleFrench = () => {
    setFrench(true);
    setEnglish(false);
    setArabic(false);
  };
  const handleKabyleEnglish = () => {
    setFrench(false);
    setEnglish(true);
    setArabic(false);
  };
  const handleKabyleArabic = () => {
    setFrench(false);
    setEnglish(false);
    setArabic(true);
  };

  const btn__active__style = {
    color: "#FFF",
    background: "#282C34",
  };

  const btn__inactive__style = {
    background: "#F0F2F3",
    color: "#282C34",
  };
 
  return (
    <div className={styles.multiLang__container}>
      <h3 style={{ color: 'var(--middleRed)', marginBottom: "25px" }}>
        {" "}
        ASEGZAWAL - {english ? "DICTIONARY" : null}{" "}
        {french ? "DICTIONAIRE" : null} {arabic ? " قاموس" : null} :{" "}
      </h3>
      <ButtonGroup
        className={styles.language__chooser}
        variant="contained"
        // color=""
        aria-label="contained button group"
      >
        <Button
          onClick={handleKabyleEnglish}
          className={`${styles.btn} ${styles.btn__english}`}
          variant={english ? "outlined" : "contained"}
          style={english ? btn__active__style : btn__inactive__style}
        >
          TAMAZIƔT ar Teglizit <br />
          (English)
        </Button>
        <Button
          onClick={handleKabyleFrench}
          className={styles.btn}
          variant={french ? "outlined" : "contained"}
          style={french ? btn__active__style : btn__inactive__style}
        >
          TAMAZIƔT ar Tefransist <br />
          (Français)
        </Button>
        <Button
          onClick={handleKabyleArabic}
          className={`${styles.btn} ${styles.btn__arabic}`}
          variant={arabic ? "outlined" : "contained"}
          style={arabic ? btn__active__style : btn__inactive__style}
        >
          TAMAZIƔT ar Taɛrabt <br />
          (العربية)
        </Button>
      </ButtonGroup>

      <div className={styles.language__container}>
        <English english={english} />
        <French french={french} />
        <Arabic arabic={arabic} />
      </div>
    </div>
  );
}

export default MultiLangDictionary;
