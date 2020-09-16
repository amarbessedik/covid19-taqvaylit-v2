import React from "react";

function English({ english }) {
  return (
    <div
      style={{ display: english ? "block" : "none" }}
      className="english lang"
    >
      <h4 style={{ color: "var(--charcoal)" }}>[ TAMAZIƔT AR TEGLIZIT ]</h4>
      <br />
      <div>
        <p>TIGGTIN: K = 1000, M = 1000000</p>
        <ul>
          <li>
            AMḌFAR AGREƔLAN W ANFAFAD AMAYNUT N CURUNA (Yettwasnen s COVID-19) =
            WORLDWIDE TRACKER OF THE NOVEL CORONAVIRUS (SARS-CoV-2)
          </li>
          <li>TAGERTILT UMAḌAL = WORLD MAP</li>
          <li>TIGGTIN = UNITS</li>
          <li>IRABULLEN = REPORTS</li>
          <li>ISEFKA = DATA</li>
          <li>ANFAFAD = VIRUS</li>
          <li>UṬṬUNEN = NUMBERS</li>
          <li>TIMẒṚIT = TABLE</li>
          <li>ARNU ẒER = LEARN MORE</li>
          <li>AKIT = TOTAL</li>
          <li>UṬṬUNEN URMIDEN = ACTUAL NUMBERS</li>
          <li>ASEƔẒAN = SOFTWARE</li>
          <li>UZDAY = LINK</li>
        </ul>
      </div> 
    </div>
  );
}

export default English;
