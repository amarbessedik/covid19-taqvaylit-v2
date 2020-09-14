import React from "react";
import styles from "./Continent.module.css";
import { prettyPrintStat } from "../../utils";
import CloseIcon from "@material-ui/icons/Close";
import Chart from "react-apexcharts";

const Continent = ({ categories, image, continentName, continentSeries }) => {
  
  let overlay = document.getElementById("overlay");
  const openOverlay = () => {
    overlay.style.display = "flex";
  };
  const closeOverlay = () => {
    overlay.style.display = "none";
  };

  const options = {
    chart: {
      type: "pie",
      background: "#fff",
      foreColor: "#333",
    },
    labels: ["Cases", "Recovered", "Deaths"],
    xaxis: {
      categories: categories,
    },
    dataLabels: {
      enabled: true,
    },

    title: {
      text: `Covid-19 in ${continentName}`,
      align: "left",
      margin: 20,
      offsetY: 10,
      style: {
        fontSize: "16px",
        color: "#7AB9FF",
        textTransform: "uppercase",
      },
    },
  };

  return (
    <div className={styles.continent__wraper}>
      <div onClick={openOverlay} className={styles.continent}>
        <h4 className={styles.continent__title}>{continentName}</h4>
        <div className={styles.continent__image}>
          <img src={image} alt="continentMap" />
        </div>
        {continentSeries && (
          <div className={styles.continent__stats}>
            <div className={styles.continent__numbers}>
              <p>Wid Yuḍnen</p>
              <p className={styles.number}>{prettyPrintStat(continentSeries.cases)}</p>
            </div>
            <div className={styles.continent__numbers}>
              <p>Wid Yejjan</p>
              <p className={styles.number}>{prettyPrintStat(continentSeries.recovered)}</p>
            </div>
            <div className={styles.continent__numbers}>
              <p>Wid Yemuten</p>
              <p className={styles.number}>{prettyPrintStat(continentSeries.deaths)}</p>
            </div>
          </div>
        )}
      </div>
      <div id="overlay" className={styles.continent__overlay}>
        <div className={styles.continent__overlay__data}>
          <div
            onClick={closeOverlay}
            className={styles.overlay__close__icon__wraper}
          >
            <CloseIcon className={styles.close__icon} />
          </div>
          <div className={styles.continent__charts}>
            {continentSeries && (
              <Chart
                options={options}
                series={Object.values(continentSeries)}
                type="pie"
                width="110%"
                height="500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continent;
