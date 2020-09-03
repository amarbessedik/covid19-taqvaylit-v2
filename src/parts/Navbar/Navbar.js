import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.png";
import links from "../../data";
import Links from "./Links";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// toggleLinks >>> navbar & sidebar links
const Navbar = ({ updateSidebarVisibility,toggleLinks, screenBreakpoint, dropdownToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageYOffset, setPageYOffset] = useState(false);

  const handleClick = () =>{
    setMenuOpen(!menuOpen);
    updateSidebarVisibility();
  }

  useEffect(() => {
    if (menuOpen && screenBreakpoint) {
      setMenuOpen(false);
      updateSidebarVisibility();
    }
  }, [screenBreakpoint, menuOpen, updateSidebarVisibility]);
  

  useEffect(()=>{
    menuOpen
      ? (document.body.style.overflowY = "hidden")
      : document.body.style.overflowY = 'visible';
  })

  window.addEventListener('scroll', ()=>{
    window.pageYOffset < 600 ? setPageYOffset(false) : setPageYOffset(true);
  })

  return (
    <div
      className={styles.navbar}
      style={{
        boxShadow:
          pageYOffset ? "0 0 15px -4px #000" : "0 0 15px -4px #333",
      }}
    >
      <div className={styles.navbar__content}>
        <div className={styles.logo}>
          <div className={styles.logo__content}>
            <img src={logo} alt="logo" />
            <h6>AMḌFAR AGREƔLAN N ANFAFAD AMAYNUT N CURUNA (COVID-19)</h6>
          </div>
        </div>
        <div className={styles.links}>
          <div style={{ display: toggleLinks ? "none" : "flex" }}>
            <Links dflex="row" links={links} />
          </div>
          <div
            style={{ display: toggleLinks ? "flex" : "none" }}
            className={styles.hamburger__menu}
          >
            <div onClick={handleClick} className={styles.hamburger__container}>
              {menuOpen ? (
                <CloseIcon className={styles.menu__icon} />
              ) : (
                <MenuIcon className={styles.menu__icon} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="dropdown__top" className="dropdown" style={dropdownToggle}>
        <h4 style={{ color: "#fff" }}>dropdown</h4>
      </div>
    </div>
  );
};

export default Navbar;
