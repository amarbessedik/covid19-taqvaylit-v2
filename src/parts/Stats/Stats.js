import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import styles from './Stats.module.css';
import {prettyPrintStat} from '../../utils';

const Stats = ({ casesType, setCasesType, countryInfo }) => {
  return (
    <div className={styles.app__left__stats_wrapper}>
      <InfoBox
        active={casesType === "cases"}
        isBlue={true}
        onClick={(e) => setCasesType("cases")}
        title="WID YUḌNEN"
        cases={prettyPrintStat(countryInfo.todayCases)}
        total={prettyPrintStat(countryInfo.cases)}
      />
      <InfoBox
        active={casesType === "recovered"}
        isGreen={true}
        onClick={(e) => setCasesType("recovered")}
        title="WID YEJJAN"
        cases={prettyPrintStat(countryInfo.todayRecovered)}
        total={prettyPrintStat(countryInfo.recovered)}
      />
      <InfoBox
        active={casesType === "deaths"}
        isRed={true}
        onClick={(e) => setCasesType("deaths")}
        title="WID YEMUTEN"
        cases={prettyPrintStat(countryInfo.todayDeaths)}
        total={prettyPrintStat(countryInfo.deaths)}
      />
    </div>
  );
};

export default Stats;
