import React, { useState, useEffect } from "react";
import "./Tapp.css";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./parts/Navbar/Navbar";
import SidebarMenu from "./parts/Navbar/SidebarMenu";
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
import Continent from "./parts/Continent/Continent";
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import northAmerica from "../src/images/north-america.jpg";
import southAmerica from "../src/images/south-america.jpg";
import africa from "../src/images/africa.jpg";
import europe from "../src/images/europe.jpg";
import asia from "../src/images/asia.jpg";
import australia from "../src/images/australia.jpg";

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
    lat: 18.82746,
    lng: -5.4796,
  });
  const [mapZoom, setMapZoom] = useState(2);
  //map countries
  const [mapCountries, setMapCountries] = useState([]);
  //cases types -> {cases, recovered, deaths}
  const [casesType, setCasesType] = useState("cases");
  //continent data
  const [continents, setContinents] = useState([]);

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

  useEffect(() => {
    const getContinents = async () => {
      await fetch("https://disease.sh/v3/covid-19/continents")
        .then((response) => response.json())
        .then((data) => {
          const continents = data.map(({continent, cases, recovered, deaths}) => ({
            continent,
            cases,
            recovered,
            deaths,

          }));
          setContinents(continents);
        });
    };
    getContinents();
  }, []);

  // continents.length? console.log('continents >>> ', continents): console.log();

  const filterContinent = (name)=>{
    return continents?.filter(entry => entry.continent === name);
  }

  const continentsData = [
    {
      name: "Marikan Ufella",
      data: filterContinent("North America")[0],
      image: northAmerica,
    },
    {
      name: "Marikan N Wadda",
      data: filterContinent("South America")[0],
      image: southAmerica,
    },
    {
      name: "Lurup",
      data: filterContinent("Europe")[0],
      image: europe,
    },
    {
      name: "Tafarka",
      data: filterContinent("Africa")[0],
      image: africa,
    },
    {
      name: "Asiya",
      data: filterContinent("Asia")[0],
      image: asia,
    },
    {
      name: "Lustrali",
      data: filterContinent("Australia/Oceania")[0],
      image: australia,
    },
  ];

  // console.log("continents data >>> ", continentsData);

  return (
    <div className="app">
      {!screenBreakpoint && (
        <SidebarMenu
          sidebarVisible={sidebarVisible}
          dropdownTopVisible={dropdownToggle}
          updateSidebarVisibility={updateSidebarVisibility}
        />
      )}

      <Navbar
        updateSidebarVisibility={updateSidebarVisibility}
        screenBreakpoint={screenBreakpoint}
        toggleLinks={toggleLinks}
        dropdownToggle={dropdown__top}
      />

      <div className="app__stats">
        <div className="map">
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
            <div className="app__left__graph">
              <Graph
                adapteCasesType={adapteCasesType}
                casesType={casesType}
                setCasesType={setCasesType}
                countryInfo={countryInfo}
                country={country}
              />
            </div>
            <div className="app__left__table">
              <Table casesType={casesType} countries={tableData} />
            </div>
          </div>
          <div className="app__right">
            {/* <h1>app right</h1> */}
            {continentsData.map(({ name, image, data }, i) => (
              <Continent key={i} name={name} image={image} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="app__bottom">
        <div className="multi__lang__dictionary">
          <MultiLangDictionary />
        </div>
        <div className="about">
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
