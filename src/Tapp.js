import React, { useState, useEffect } from "react";
import "./Tapp.css";
import ScrollTop from "./parts/ScrollTop/ScrollTop";
import Navbar from "./parts/Navbar/Navbar";
import About from "./parts/About/About";
import MultiLangDictionary from "./parts/MultiLangDictionary/MultiLangDictionary";
import Footer from "./parts/Footer/Footer";
import { sortData } from "./utils";
import Map from "./parts/Map/Map";
import Stats from "./parts/Stats/Stats";
import Table from "./parts/Table/Table";
import "leaflet/dist/leaflet.css";
import TextSlider from "./parts/TextSlider/TextSlider";
import Graph from "./parts/Graph/Graph";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import Continent from "./parts/Continents/Continent";
import northAmericaImage from "../src/images/north-america.jpg";
import southAmericaImage from "../src/images/south-america.jpg";
import africaImage from "../src/images/africa.jpg";
import europeImage from "../src/images/europe.jpg";
import asiaImage from "../src/images/asia.jpg";
import australiaImage from "../src/images/australia.jpg";

const Tapp = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [screenBreakpoint, setScreenBreakpoint] = useState(false);
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
    lat: 25.82746,
    lng: -5.4796,
  });
  const [mapZoom, setMapZoom] = useState(2);
  //map countries
  const [mapCountries, setMapCountries] = useState([]);
  //cases types -> {cases, recovered, deaths}
  const [casesType, setCasesType] = useState("cases");

  const handleToggleLinks = () => {
    window.innerWidth <= 768 ? setToggleLinks(true) : setToggleLinks(false);
  };

  const handleBreakpoint = () => {
    window.innerWidth > 768
      ? setScreenBreakpoint(true)
      : setScreenBreakpoint(false);
  };

  const updateSidebarVisibility = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const resetSidebarVisibility = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!dropdownToggle && window.pageYOffset > 315) {
        setDropdownToggle(true);
      } else if (dropdownToggle && window.pageYOffset <= 315) {
        setDropdownToggle(false);
      }
    });
    window.addEventListener("load", handleToggleLinks);
    window.addEventListener("resize", handleToggleLinks);
    window.addEventListener("load", handleBreakpoint);
    window.addEventListener("resize", handleBreakpoint);
  });

  const dropdown__top = {
    display: dropdownToggle ? "flex" : "none",
    transition: "all ease-in-out 500ms",
  };
  const dropdown__bottom = {
    display: dropdownToggle ? "none" : "flex",
    transition: "all ease-in-out 500ms",
  };

  const adapteCasesType = (casesT) => {
    switch (casesT) {
      case "cases":
        return "WID YUḌNEN";
      case "recovered":
        return "WID YEJJAN";
      case "deaths":
        return "WID YEMUTEN";
      default:
        return null;
    }
  };

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
    let countryCode = e.target.value;
    if (countryCode === "AMAḌAL") {
      countryCode = "worldwide";
    }

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        if (countryCode !== "worldwide"){
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);}
        else{
          setMapZoom(2);
        }
      });
  };

  return (
    <div className="app">
      <Navbar
        resetSidebarVisibility={resetSidebarVisibility}
        sidebarVisible={sidebarVisible}
        updateSidebarVisibility={updateSidebarVisibility}
        screenBreakpoint={screenBreakpoint}
        toggleLinks={toggleLinks}
        dropdownToggle={dropdown__top}
      />

      <div className="app__stats">
        <div id="map" className="map">
          <Map
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
            casesType={casesType}
          />
        </div>
        <div
          id="dropdown__bottom"
          className="dropdown"
          style={dropdown__bottom}
        >
          {/* <h1>dropdown</h1> */}
          <FormControl className="form__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem key="0" value="worldwide">
                <span>AMAḌAL</span>
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
        <TextSlider />
        <div className="app__stats__content">
          <div className="app__left">
            <div className="app__left__stats">
              <Stats
                casesType={casesType}
                setCasesType={setCasesType}
                countryInfo={countryInfo}
              />
            </div>
            <div id="graph" className="app__left__graph">
              <Graph
                adapteCasesType={adapteCasesType}
                casesType={casesType}
                setCasesType={setCasesType}
                countryInfo={countryInfo}
                country={country}
              />
            </div>
            <div id="table" className="app__left__table">
              <Table casesType={casesType} countries={tableData} />
            </div>
          </div>
          <div className="app__right">
            <Continent
              continent="Africa"
              title="aCuW-2 DI TFERKA"
              imageUrl={africaImage}
            />
            <Continent
              continent="north%20america"
              title="aCuW-2 DI MARIKAN UFELLA"
              imageUrl={northAmericaImage}
            />
            <Continent
              continent="Europe"
              title="aCuW-2 DI URRUPA"
              imageUrl={europeImage}
            />
            <Continent
              continent="Asia"
              title="aCuW-2 DI ASIYA"
              imageUrl={asiaImage}
            />
            <Continent
              continent="south%20america"
              title="aCuW-2 DI MARIKAN N WADDA"
              imageUrl={southAmericaImage}
            />
            <Continent
              continent="australia%2Foceania"
              title="aCuW-2 DI USTRALIA/OCEANIA"
              imageUrl={australiaImage}
            />
          </div>
        </div>
      </div>
      <div id="dictionary" className="app__bottom">
        <div className="multi__lang__dictionary">
          <MultiLangDictionary />
        </div>
        <div id="about" className="about">
          <About />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default Tapp;
