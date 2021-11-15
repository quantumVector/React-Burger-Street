import React from 'react';
import classes from '../styles/Menu.module.css';

const Menu = () => {
  return (
    <nav className={classes.menu}>
      <a href="https://github.com/quantumVector" className={classes.menuItem}>Home</a>
      <a href="https://github.com/quantumVector" className={classes.menuItem}>Menu</a>
      <a href="https://github.com/quantumVector" className={classes.menuItem}>About us</a>
    </nav>
  )
}

export default Menu;
