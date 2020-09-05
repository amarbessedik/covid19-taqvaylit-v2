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
              color: "var(--middleRed)",
            }}
          >
            &copy;
            <span>AMḌFAR AGREƔLAN N ANFAFAD N CURUNA WIS-2 (aCuW-2)</span>{" "}
          </h4>
        </li>
        <li style={center}>
          <span style={{ textTransform: "uppercase", fontSize: ".8rem" }}>
            AJNYUR N ASEƔẒAN SƔUR AMAR BESSEDIK <br /> MARIKAN UFLLA, ƔUCT 2020{" "}
            {!new Date().getFullYear() === 2020
              ? " - " + new Date().getFullYear()
              : null}
          </span>

          <h5>amar.bessedik@gmail.com</h5>
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
