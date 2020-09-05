import React from 'react';

function French({french}) {
    return (
      <div
        style={{ display: french ? "block" : "none" }}
        className="french lang"
      >
        <h4 style={{ color: "var(--charcoal)" }}>[ TAMAZIƔT AR TAFRANSIST ]</h4>
        <br />
        <div>
          <p>TIGGTIN: K = 1000, M = 1000000</p>
          <ul>
            <li>
              AMḌFAR AGREƔLAN W ANFAFAD AMAYNUT N CURUNA (Yettwasnen s COVID-19)
              = TRAQUEUR INTERNATIONAL DU NOUVEAU CORONAVIRUS (nCoV-19)
            </li>
            <li>TAGERTILT UMAḌAL = CARTE GEOGRAPHIQUE DU MONDE</li>
            <li>TIGGTIN = UNITES</li>
            <li>IRABULLEN = RAPORTS</li>
            <li>ISEFKA = DONNEES</li>
            <li>ANFAFAD = VIRUS</li>
            <li>UṬṬUNEN = NOMBRES</li>
            <li>TIMẒṚIT = TABLEAU</li>
            <li>ARNU ẒER = SAVOIR PLUS</li>
            <li>AKIT = TOTAL</li>
            <li>UṬṬUNEN URMIDEN = CAS ACTIFS</li>
            <li>ASEƔẒAN = LOGICIEL</li>
            <li>UZDAY = LIEN</li>
          </ul>
        </div> 
      </div>
    );
}

export default French;
