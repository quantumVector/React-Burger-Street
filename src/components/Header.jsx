import React from 'react';
import classes from '../styles/Header.module.css';
import Cart from './Cart';
import Info from './Info';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Menu />
      <Cart />
      <Info />
    </header>
  )
}

export default Header;
