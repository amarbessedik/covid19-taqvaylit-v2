import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InfoBox from "./components/InfoBox";
import ScrollTop from "./components/ScrollTop";
import LineGraphButtons from "./components/LineGraphButtons";
import Map from "./components/Map";
import LineGraph from "./components/LineGraph";
import Table from "./components/Table";
import "./App.css";
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import { sortData, prettyPrintStat } from "./utils";
import "leaflet/dist/leaflet.css";
import AboutData from "./components/AboutData";

export default function App2() {
  //local state about countries
  const [countries, setCountries] = useState([]);
  //Track which country is selected
  const [country, setCountry] = useState("worldwide");
  //Country info
  const [countryInfo, setCountryInfo] = useState({});
  //Table data
  const [tableData, setTableData] = useState([]);
  //Map center
  const [mapCenter, setMapCenter] = useState({
    lat: 18.82746,
    lng: -5.4796,
  });
  const [mapZoom, setMapZoom] = useState(1);
  //map countries
  const [mapCountries, setMapCountries] = useState([]);
  //cases types -> {cases, recovered, deaths}
  const [casesType, setCasesType] = useState("cases");

  const adapteCasesType = (casesT) =>{
    switch(casesT){
      case 'cases':
        return "WID YUḌNEN";
      case 'recovered':
        return 'WID YEJJAN';
      case 'deaths':
        return 'WID YEMUTEN';
      default:
        return null;    
    }
  }

  //This code runs once when the code is loaded and not again after
  useEffect(() => {
    const getTotalsWorldwide = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setCountryInfo(data);
        });
    };
    getTotalsWorldwide();
  }, []);

  //This code runs once when the code is loaded and not again after
  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, Algeria, United Kingdom
            value: country.countryInfo.iso2, //US, DZ, UK
            id: country.countryInfo._id,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };
    getCountries();
  }, []);

  const onCountryChange = async (e) => {
    e.preventDefault();
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        if (countryCode !== "worldwide")
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div className="app2">
      <div id="map" className="app2__container">
        <Navbar />
        <ScrollTop />
        {/* map */}
        <div id="mapp" className="app__map">
          <Map
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
            casesType={casesType}
          />
        </div>
        {/* dropdown */}
        <div id="graph" className="app__dropdown">
          <FormControl className="form__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem key="0" value="worldwide">
                <span>Worldwide</span>
              </MenuItem>
              {
                /* loop through all countries and display each as an option */
                countries.map((country) => {
                  return (
                    <MenuItem key={country.id} value={country.value}>
                      {country.name}
                    </MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        </div>
        {/* stat */}
        <div className="app__info__stats">
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
        {/* graph */}
        {/* table */}
        <div className="app__graph__table">
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
              <Table casesType={casesType} countries={tableData} />
            </CardContent>
          </Card>
        </div>
        {/* AboutData */}
        <AboutData />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
