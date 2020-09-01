import React from 'react';
import styles from './AboutData.module.css';

const Presentation = () => {
    return (
      <div id="about" className={styles.app__about__data}>
        <h3>
          ISFKAYA-AGI ZEDMAƔ-TEN-ID DI{" "}
          <a className={styles.about__link} href="https://www.disease.sh">
            Open Disease Data
          </a>{" "}
          (UṬṬUNEN-NSEN TTBEDDILEN DIMA)
        </h3>
        <p>
          Ayen i d-yettbanen deg wuṭṭunen yezmer yenqes, imi, mazal ayen ara
          d-ibanen akka ar deqqal, annect-agi, ɣef teɣzi n 24 n tsaεtin. Ma d
          isefka; ttasen-d srid i yiman-nsen s ttawil n uẓeṭṭa n Internet, melba
          ma iger-d umdan iman-is akken ad ten-isekcem neɣ ad ten-ibeddel s ufus, annect-agi; iḍerru-d yal mi ara yili fkant-ten-id tmura
          ɣer tesqamuyin gar-asent:{" "}
          <ol>
            <li>
              <a
                className={styles.about__link}
                href="https://github.com/CSSEGISandData/COVID-19"
              >
                TASDAWIT N JOHNS HOPKINS
              </a>
            </li>
            <li>
              <a
                className={styles.about__link}
                href="https://github.com/nytimes/covid-19-data"
              >
                AƔMIS N NEW YORK TIMES
              </a>
            </li>
            <li>
              <a
                className={styles.about__link}
                href="https://www.worldometers.info/coronavirus/"
              >
                WORLDOMETERS
              </a>
            </li>
            <li>
              <a
                className={styles.about__link}
                href="https://github.com/ActiveConclusion/COVID19_mobility"
              >
                IṚABULEN N APPLE.
              </a>
            </li>
          </ol>
          Ssarameɣ annect-agi ad aken-yeğğ ad tesεum tamuɣli s tehri ɣef wayen iḍerrun di kuz (4) n tɣemmar n umaḍal.
        </p>
        <h4 id="amawal">
          MA YELLA MGARADEN WUṬṬUNEN SI TESQAMUTT ƔER TAYED D TILIWA ANSI I D-TTAWINT ISEFKA I YEMGARADEN.
        </h4>
        <p>
          Yal amḍiq ansi i d-yezdem uṭṭunen, yerna, ttaznen-d di lewqat
          yemgaraden seg teɣmert ɣer tayeḍ.
        </p>
        <br />
        <br />
        <h3>AMAWAL: </h3>
        <span>
          Tamaziɣt tezmer ula d nettat ad teḍfer tamussni tartar am nettat am tmeslayin nniḍen.
        </span>
        <p>TIGGTIN: K = 1000, M = 1000000</p>
        <ul>
          <li>
            AMḌFAR AGREƔLAN W ANFAFAD AMAYNUT N CURUNA 19 = TRAQUEUR
            INTERNATIONAL DU NOUVEL CORONAVIRUS 19
          </li>
          <li>TTAGERTILT UMAḌAL = CARTE GEOGRAPHIQUE DU MONDE</li>
          <li>TIGGTIN = UNITES</li>
          <li>IRABULLEN = RAPORTS</li>
          <li>ISEFKA = DONNEES</li>
          <li>ANFAFAD = VIRUS</li>
          <li>UṬṬUNEN = NOMBRES</li>
          <li>TIMẒṚIT = TABLEAU</li>
          <li>ARNU ẒER = SAVOIR PLUS</li>
          <li>AKIT = TOTAL</li>
          <li>URMIDEN = ACTIFS</li>
          <li>ASEƔẒAN = LOGICIEL</li>
          <li>UZDAY: LIEN</li>
        </ul>
      </div>
    );
}

export default Presentation;
