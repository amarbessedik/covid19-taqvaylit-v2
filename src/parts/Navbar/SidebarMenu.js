import React from 'react';
import Links from './Links';
import styles from './SidebarMenu.module.css';
import links from '../../data';

const SidebarMenu = ({sidebarVisible, dropdownTopVisible, screenBreakpoint }) => {
  const style = {
    top: dropdownTopVisible? '112px': '75px',
    transform: !sidebarVisible ? "translateX(100%)" : "translateX(0)"
  };
  
  return (
    <div className={styles.menu__container} style={style} >
      <div style={{width: screenBreakpoint ? '60vw': '100vw'}} className={styles.menu__wrapper}>
        <Links dflex="column" links={links} />
      </div>
    </div>
  );
};

export default SidebarMenu;
