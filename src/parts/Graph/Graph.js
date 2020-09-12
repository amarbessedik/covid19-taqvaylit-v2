import React from 'react';
import styles from './Graph.module.css';
import {
  Card,
  CardContent,
} from "@material-ui/core";
import LineGraph from './LineGraph';
import LineGraphButtons from './LineGraphButtons';
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const Graph = ({ adapteCasesType, casesType, setCasesType, countryInfo, country }) => {
  return (
    <div className={styles.graph}>
      <Card>
        <CardContent>
          <h3
            style={{
              textTransform: "uppercase",
              color: "#777",
              fontWeight: "400",
            }}
            className="app__graph"
          >
            {adapteCasesType(casesType)} DEG MAḌAL AKIT
          </h3>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "capitalize",
              color: "#777",
            }}
          >
            [ Uṭṭunen <TrendingUpIcon /> ]
          </span>
          <LineGraphButtons
            countryInfo={countryInfo}
            setCasesType={setCasesType}
            casesType={casesType}
          />
          {country === "worldwide" ? (
            <LineGraph casesType={casesType} />
          ) : (
            <LineGraph casesType={casesType} location={country} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Graph;
