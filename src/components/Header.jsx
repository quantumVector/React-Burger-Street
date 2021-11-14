import React from 'react';
import classes from '../styles/Header.module.css';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
    </header>
  )
}

export default Header
