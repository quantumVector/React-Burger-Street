import React from 'react';
import classes from '../styles/Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.circle}>
        <div className={classes.abbr}>RBS</div>
      </div>
      <div className={classes.logoText}>React Burger Street</div>
    </div>
  )
}

export default Logo;
