import React from "react";
import ShareButtons from "../../components/ShareButtons";
import styles from "./Footer.module.css";

const center = {
  textAlign: "center",
};

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footer__list}>
        <li style={center}>
          <h4
            style={{
              padding: 0,
              marginBottom: "5px",
              color: "#008FFB",
            }}
          >
            <span>AMḌFAR AGREƔLAN N ANFAFAD N CURUNA WIS-2 (aCuW-2)</span>{" "}
          </h4>
        </li>
        <li style={center}>
          <span style={{ textTransform: "uppercase", fontSize: ".7rem" }}>
            &copy; AJENYUR N USELKIMAN AMAR BESSEDIK <br /> MARIKAN UFLLA, ƔUCT
            2020{" "}
            {!new Date().getFullYear() === 2020
              ? " - " + new Date().getFullYear()
              : null}
          </span>
        </li>
      </ul>
      <br />
      <ul className={styles.footer__list}>
        <li>
          <ShareButtons />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
