import React from 'react';
import classes from '../styles/Info.module.css';
import clock from '../assets/clock.png';
import phone from '../assets/phone.png';

const Info = () => {
  return (
    <div className={classes.info}>
      <div className={classes.item}>
        <img className={classes.icon} src={clock} alt="icon" />
        <div className={classes.wrap}>
          <div className={classes.title}>Время работы:</div>
          <div className={classes.hours}>с 10:00 до 23:00</div>
        </div>
      </div>
      <div className={classes.item}>
        <img className={classes.icon} src={phone} alt="icon" />
        <div className={classes.wrap}>
          <div className={classes.phone}>+7 123 456 78 90</div>
          <a className={classes.contact} href="tel:+7 (1234) 56 78 90">Позвоните нам</a>
        </div>
      </div>
    </div>
  )
}

export default Info;
