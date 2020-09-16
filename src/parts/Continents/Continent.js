import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Continents.module.css";
import options from "./options";

class Continent extends Component {
  state = {
    seriesPie: [],
    seriesLine: [],
    options: options,
    btnToggle: false,
  };

  componentDidMount() {
    const getContinentData = async () => {
      const { continent, title } = this.props;  
      await fetch(`https://disease.sh/v3/covid-19/continents/${continent}`)
        .then((response) => response.json())
        .then((data) => {
          const series = [data.cases, data.recovered, data.active, data.deaths];
          this.setState({ seriesPie: series });
          this.setState({ seriesLine: [{ name: "aCuW-2", data: series }] });
          this.setState({
            options: {
              ...options,
              title: {
                text: `${title}`,
              },
            },
          });
        });
    };
    getContinentData();
  }

  render() {
    return (
      <div className={styles.continent}>
        <div className={styles.continent__image}>
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className={styles.continent__graphs__container}>
          <div className={styles.continent__graph__toggler}>
            <button
              onClick={() =>
                this.setState({ btnToggle: !this.state.btnToggle })
              }
              className={styles.continent__graph__btn}
              type="button"
            >
              {!this.state.btnToggle ? "Tifggagin" : "Taẓayeṛt"}
            </button>
          </div>
          <div
            style={{ display: !this.state.btnToggle ? "block" : "none" }}
            className={styles.continent__donut__graph}
          >
            <ReactApexChart
              options={this.state.options}
              series={this.state.seriesPie}
              type="donut"
              width="100%"
            />
          </div>
          <div
            style={{ display: this.state.btnToggle ? "block" : "none" }}
            className={styles.continent__line__graph}
          >
            <ReactApexChart
              options={this.state.options}
              series={this.state.seriesLine}
              type="bar"
              width="100%"
              height="280"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Continent;
