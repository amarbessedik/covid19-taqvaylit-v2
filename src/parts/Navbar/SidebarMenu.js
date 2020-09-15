import React from 'react';
import Links from './Links';
import styles from './SidebarMenu.module.css';
import links from '../../data';

const SidebarMenu = ({ sidebarVisible, updateSidebarVisibility, resetOpenSidemenu }) => {
  const style = {
    top: "75px",
    transform: !sidebarVisible ? "translateX(100%)" : "translateX(0)",
  };

  return (
    <div className={styles.menu__container} style={style}>
      <div onClick={()=> {updateSidebarVisibility(); resetOpenSidemenu()}}
        style={{ width: window.innerWidth <= 500 ? "100vw" : "60vw" }}
        className={styles.menu__wrapper}
      >
        <Links dflex="column" links={links} />
      </div>
    </div>
  );
};

export default SidebarMenu;
