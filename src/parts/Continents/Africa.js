import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from './Continents.module.css';
import options from './options';

class Africa extends Component {
  state = {
    seriesPie: [],
    seriesLine: [],
    options: options,
  };

  //Line graph data
  // const dataSeries = [data.cases, data.recovered, data.active, data.deaths];
  //         this.setState({ series: [{ name: "aCuW-2", data: dataSeries }] });

  componentDidMount() {
    const getAfricaData = async () => {
      await fetch(`https://disease.sh/v3/covid-19/continents/Africa`)
        .then((response) => response.json())
        .then((data) => {
          const series = [data.cases, data.recovered, data.active, data.deaths];
          this.setState({ seriesPie: series });
          this.setState({ seriesLine: [{ name: "aCuW-2", data: series }] });
          this.setState({
            options: {
              ...options,
              title: {
                text: "aCuW-2 DI TFERKA",
              },
            },
          });
        });
    };
    getAfricaData();
  }

  render() {
    return (
      <div className={styles.continent}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.seriesPie}
          type="donut"
          width="100%"
        />
        <div className={styles.continent__overlay}>
          <div className={styles.continent__overlay__content}>
            <ReactApexChart
              options={this.state.options}
              series={this.state.seriesLine}
              type="line"
              width="100%"
              height='250'
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Africa;
