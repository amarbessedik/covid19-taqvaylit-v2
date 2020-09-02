import React, { useState, useEffect } from "react";
import "./Tapp.css";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./parts/Navbar/Navbar";
import SidebarMenu from "./parts/Navbar/SidebarMenu";
import z from './images/z.webp';

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
    // handleBreakpoint();
  };

  useEffect(
    () => {
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
        <div className="about">
          <h1>ARNU ẒER</h1>
          <img src={z} alt="z" width="40px" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptas quidem itaque sed, illo a debitis dolores in repellat
            deserunt culpa, possimus recusandae expedita maxime saepe obcaecati
            incidunt ea odio. Nesciunt cumque culpa sit natus modi hic saepe
            maxime. Dolore nemo deserunt id nesciunt. Explicabo sint doloremque
            sit aut incidunt, dolore quis ullam. Voluptas, officia doloremque
            architecto soluta eveniet doloribus? Reprehenderit id, labore ad, ea
            maxime inventore quia incidunt velit atque, repudiandae neque nihil
            ullam quasi impedit iure odio a distinctio laboriosam. Repellendus
            officia et assumenda, necessitatibus culpa at temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore neque et necessitatibus, perferendis, saepe aut nostrum tempora eius, exercitationem maiores enim doloribus. Corporis aliquid amet ea ab necessitatibus corrupti aspernatur unde asperiores est? Reprehenderit rem nemo repellat doloremque iste velit?
          </p>
        </div>
        <div className="footer">
          <h1>footer</h1>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default Tapp;

// ===============================
// const handleDropdownToggling = () => {
//   if (!dropdownToggle && window.pageYOffset > 315) {
//     setDropdownToggle(true);
//   } else if (dropdownToggle && window.pageYOffset <= 315) {
//     setDropdownToggle(false);
//   }
// };
