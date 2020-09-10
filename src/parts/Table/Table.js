import React from "react";
import styles from "./Table.module.css";
import numeral from "numeral";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";

function Table({ countries }) {
  // console.log('countries from TABLE >>>>', countries);
  return (
    <div id="table" className={styles.table__outer__container}>
      <div id="_table" className="app__table__header">
        <h3
          style={{
            textTransform: "uppercase",
            color: "#777",
            fontWeight: "400",
          }}
        >
          UṬṬUNEN SRID SI YELL TAMURT
        </h3>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "capitalize",
            color: "#888",
          }}
        >
          [ Uṭṭunen <TrendingDownIcon /> ]
        </span>
      </div>
      <div className={styles.table__inner__container}>
        <div className={styles.table}>
          <table>
            <tr style={{ paddingLeft: "5px" }}>
              <th>TAMURT</th>
              <th>UṬṬUNEN URMIDEN</th>
              <th>WID YEMUTEN</th>
              <th>WID YEJJAN</th>
              <th>UṬṬUNEN AKIT</th>
            </tr>

            {countries.map(
              ({
                country,
                cases,
                active,
                deaths,
                recovered,
                countryInfo: { flag },
              }) => {
                return (
                  <tr key={country}>
                    <td className={styles.flag}>
                      {" "}
                      <img src={flag} alt="flag" /> <span>{country}</span>
                    </td>
                    <td>{numeral(active).format(0.0)}</td>
                    <td>{numeral(deaths).format(0.0)}</td>
                    <td>{numeral(recovered).format(0.0)}</td>
                    <td>
                      <strong>{numeral(cases).format(0.0)}</strong>
                    </td>
                  </tr>
                );
              }
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
