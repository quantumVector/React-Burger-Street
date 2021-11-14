import React from 'react';
import classes from '../styles/Header.module.css';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
