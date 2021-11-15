import React from 'react';
import classes from '../styles/Cart.module.css';
import img from '../assets/cart.png';

const Cart = () => {
  return (
    <div className={classes.cart}>
      <img className={classes.icon} src={img} alt="cart" />
      <div className={classes.wrap}>
        <div className={classes.price}>3.70 $</div>
        <div className={classes.products}>1 products</div>
      </div>
    </div>
  )
}

export default Cart;
