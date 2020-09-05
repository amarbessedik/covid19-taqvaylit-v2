import React from 'react';
import styles from './Graph.module.css';
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import LineGraph from './LineGraph';
import LineGraphButtons from './LineGraphButtons';

const Graph = ({ adapteCasesType, casesType, setCasesType, countryInfo, country }) => {
  return (
    <div className={styles.graph}>
      <Card>
        <CardContent>
          {/* graph */}
          <h3 style={{ textTransform: "uppercase" }} className="app__graph">
            {adapteCasesType(casesType)} DEG AMAḌAL AKIT
          </h3>
          <span
            style={{
              display: "block",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            (Asmerni N Uṭṭunen D Asawen)
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
          {/* country table */}
          <div id="table" style={{ height: "80px" }}></div>
          <div id="_table" className="app__table__header">
            <h3 style={{ textTransform: "uppercase" }}>
              UṬṬUNEN SRID SI YELL TAMURT
            </h3>
            <span
              style={{
                display: "block",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              (Asmerni N Uṭṭunen D Akewssar)
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Graph;
