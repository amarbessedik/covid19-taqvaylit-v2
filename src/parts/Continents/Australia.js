import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Continents.module.css";
import options from "./options";

class Australia extends Component {
  state = {
    series: [],
    options: options,
  };

  componentDidMount() {
    const getAustraliaData = async () => {
      await fetch(`https://disease.sh/v3/covid-19/continents/australia%2Foceania`)
        .then((response) => response.json())
        .then((data) => {
          const series = [data.cases, data.recovered, data.active, data.deaths];
          this.setState({ series: series });
          this.setState({
            options: {
              ...options,
              title: {
                text: "aCuW-2 DI USTRALIA/OCEANIA",
              },
            },
          });
        });
    };
    getAustraliaData();
  }

  render() {
    return (
      <div className={styles.continent}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="100%"
        />
      </div>
    );
  }
}

export default Australia;
