import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.png";
import links from "../../data";
import Links from "./Links";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// toggleLinks >>> navbar & sidebar links
const Navbar = ({ updateSidebarVisibility, toggleLinks, dropdownToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () =>{
    setMenuOpen(!menuOpen);
    updateSidebarVisibility();
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.logo}>
          <div className={styles.logo__content}>
            <img src={logo} alt="logo" />
            <h6>AMḌFAR AGREƔLAN W ANFAFAD AMAYNUT N CURUNA 19</h6>
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
              {!menuOpen ? (
                <MenuIcon className={styles.menu__icon} />
              ) : (
                <CloseIcon className={styles.menu__icon} />
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
