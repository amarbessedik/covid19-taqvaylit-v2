import React from "react";
import styles from "./About.module.css";
import LinkIcon from "@material-ui/icons/Link";

const About = () => {
  return (
    <div id="about" className={styles.app__about}>
      <h2>
        Isfkaya-agi Ḥawcaɣ-ten-id deg{" "}
        <a
          className={styles.about__link}
          href="https://www.disease.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Disease Data <LinkIcon className={styles.link__icon} />
        </a> 
      </h2>
      <p>
        Ayen i d-yettbanen deg wuṭṭunen yezmer yenqes, imi, mazal ayen ara
        d-ibanen akka ar deqqal, annect-agi, ɣef teɣzi n 24 n tsaεtin. Ma d
        isefka; ttasen-d srid i yiman-nsen s ttawil n uẓeṭṭa n Internet, melba
        ma iger-d umdan iman-is akken ad ten-isekcem neɣ ad ten-ibeddel s ufus,
        annect-agi; iḍerru-d yal mi ara yili fkant-ten-id tmura ɣer tesqamuyin
        gar-asent:{" "}
      </p>
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

      <p>
        Ma yella mgaraden wuṭṭunen si tesqamutt ɣer tayeḍ d tiliwa ansi i
        d-ttawint isefka i yemgaraden. Yell tesqamutt ansi i d-tettḥawac
        uṭṭunen, yerna, ttaznen-d di lewqat yemgaraden seg teɣmert ɣer tayeḍ.
        Ssarameɣ annect-agi ad aken-yeğğ ad tesεum tamuɣli s tehri ɣef wayen
        iḍerrun di kuz (4) n tɣemmar n umaḍal.
      </p>
    </div>
  );
};

export default About;
