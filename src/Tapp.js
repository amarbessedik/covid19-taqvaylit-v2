import React, { useState, useEffect } from "react";
import "./Tapp.css";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./parts/Navbar/Navbar";
import SidebarMenu from "./parts/Navbar/SidebarMenu";
import About from "./parts/About/About";
import MultiLangDictionary from "./parts/MultiLangDictionary/MultiLangDictionary";
import Footer from "./parts/Footer/Footer";
import { sortData, prettyPrintStat } from "./util";
import Map from "./parts/Map/Map";
import Stats from "./parts/Stats/Stats";
import Table from "./parts/Table/Table";
import "leaflet/dist/leaflet.css";
import TextSlider from "./parts/TextSlider/TextSlider";
import Graph from "./parts/Graph/Graph";
import Country from "./parts/Country/Country";
import algeria from "../src/images/algeria.jpg";
import morocco from "../src/images/morocco.jpg";
import tunisia from "../src/images/tunisia.jpg";
import libya from "../src/images/libya.jpg";
import mauritania from "../src/images/mauritania.jpg";

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
  const [mapZoom, setMapZoom] = useState(1);
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

  const countrySubset = [
    "Algeria",
    "Morocco",
    "Tunisia",
    "Libyan Arab Jamahiriya",
    "Mauritania",
  ];

  const countrySubsetData = tableData.filter((entry) =>
    countrySubset.includes(entry.country)
  );

  const filterCountries = (country, data) => {
    return data.filter((entry) => entry.country === country);
  };

  const preparedCountrySubset = [
    {
      name: "Lazzayer",
      data: filterCountries("Algeria", countrySubsetData),
      image: algeria
    },
    {
      name: "Lmarruk",
      data: filterCountries("Morocco", countrySubsetData),
      image: morocco
    },
    {
      name: "Tunes",
      data: filterCountries("Tunisia", countrySubsetData),
      image: tunisia
    },
    {
      name: "Libya",
      data: filterCountries("Libyan Arab Jamahiriya", countrySubsetData),
      image: libya
    },
    {
      name: "Muritania",
      data: filterCountries("Mauritania", countrySubsetData),
      image: mauritania
    },
  ];

  console.log("preparedCountrySubset >>> ", preparedCountrySubset[0].data);

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
          <h1>dropdown</h1>
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
            <div className="app__left__table">
              <Table casesType={casesType} countries={tableData} />
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
          </div>
          <div className="app__right">
            {/* <h1>app right</h1> */}
            {preparedCountrySubset.map(({name, image, data},
                i
              ) => (
                <Country
                  key={i}
                  image={image}
                  name={name}
                  data={data}
                />
              )
            )}
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
