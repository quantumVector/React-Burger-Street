import React from 'react';
import classes from '../styles/Slider.module.css';
import cart from '../assets/cart-white.png';
import cn from 'classnames';

const Slider = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.title}>Бургер Мисс Зомби</div>
          <div className={classes.discription}>200 г говядины, бекон, жареная моцарелла, халапеньо, маринованный огурец, сушеные помидоры, картофельные решетки, салат, Рапунцель, соус Майо, соус Мартино, Красная булочка с маслом</div>
          <div className={classes.btnWrap}>
            <div className={cn(classes.btn, classes.btnCart)}>
              <div className={classes.btnText}>В корзину</div>
              <img className={classes.btnIcon} src={cart} alt="cart" />
            </div>
            <div className={cn(classes.btn, classes.btnMenu)}>
              <div className={classes.btnText}>Посмотреть меню</div>
              <div className={classes.iconArrow}></div>
            </div>
          </div>
        </div>
        <div className={classes.presentation}>
          <div className={classes.price}>3.70 $</div>
          <div className={classes.new}>New</div>
        </div>
      </div>
      <div className={classes.scrolling}>
        <div className={cn(classes.btnScroll, classes.btnPrev)}></div>
        <div className={cn(classes.btnScroll, classes.btnNext)}></div>
        <div className={classes.currentItem}>01</div>
        <div className={classes.totalItems}>/ 04</div>
      </div>
    </div>
  )
}

export default Slider;
