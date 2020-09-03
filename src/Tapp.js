import React, { useState, useEffect } from "react";
import "./Tapp.css";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./parts/Navbar/Navbar";
import SidebarMenu from "./parts/Navbar/SidebarMenu";
import About from "./parts/About/About";
import MultiLangDictionary from "./parts/MultiLangDictionary/MultiLangDictionary";
import Footer from "./parts/Footer/Footer";

const Tapp = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [screenBreakpoint, setScreenBreakpoint] = useState(false);

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
    }
  );

  const dropdown__top = {
    display: dropdownToggle ? "flex" : "none",
    transition: "all ease-in-out 500ms",
  };
  const dropdown__bottom = {
    display: dropdownToggle ? "none" : "flex",
    transition: "all ease-in-out 500ms",
  };

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
          <h1>map</h1>
        </div>
        <div
          id="dropdown__bottom"
          className="dropdown"
          style={dropdown__bottom}
        >
          <h1>dropdown</h1>
        </div>
        <div className="app__stats__content">
          <div className="app__left">
            <div className="app__left__stats">
              <h1>stats</h1>
            </div>
            <div className="app__left__table">
              <h1>table</h1>
            </div>
            <div className="app__left__graph">
              <h1>graph</h1>
            </div>
          </div>
          <div className="app__right">
            <h1>app right</h1>
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

