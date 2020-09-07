import React from "react";
import { prettyPrintStat } from "../../utils";
import LineGraphButton from "./LineGraphButton";
import styles from "./LineGraphButtons.module.css";

function LineGraphButtons({
  countryInfo: {
    todayCases,
    cases,
    todayRecovered,
    recovered,
    todayDeaths,
    deaths,
  },
  casesType,
  setCasesType,
}) {

  return (
    <div className={styles.lineGraph__buttons}>
      <LineGraphButton
        color="blue"
        active={casesType === "cases"}
        isBlue={true}
        onClick={(e) => setCasesType("cases")}
        title="WID YUḌNEN"
        cases={prettyPrintStat(todayCases)}
        total={prettyPrintStat(cases)}
      />
      <span></span>
      <LineGraphButton
        color="green"
        active={casesType === "recovered"}
        isGreen={true}
        onClick={(e) => setCasesType("recovered")}
        title="WID YEJJAN"
        cases={prettyPrintStat(todayRecovered)}
        total={prettyPrintStat(recovered)}
      />
      <span></span>
      <LineGraphButton
        color="red"
        active={casesType === "deaths"}
        isRed={true}
        onClick={(e) => setCasesType("deaths")}
        title="WID YEMUTEN"
        cases={prettyPrintStat(todayDeaths)}
        total={prettyPrintStat(deaths)}
      />
    </div>
  );
}

export default LineGraphButtons;
