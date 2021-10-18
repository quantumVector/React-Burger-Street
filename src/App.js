import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import basket from './assets/corsina.png';
import arrow from './assets/arrow.svg';
import burger from './assets/Classic-burger-Pastrami-New_600x600.jpg';

function App() {
  return (
    <div className="app-wrapper">
      <div className="header">
        <div className="logo-wrap">
          <img className="logo" src={logo} alt="logo" />
          <div>
            <div className="logo-title">REACT BURGER STREET</div>
            <div className="tagline">самые крутые бургеры!</div>
          </div>
        </div>
        <div className="basket">
          <div className="total">520 &#8381;</div>
          <div className="separator"></div>
          <img className="icon" src={basket} alt="basket" />
          <div className="basket-num">3</div>
        </div>
      </div>

      <div className="content">
        <div className="top-content">
          <div className="category">
            <div className="category-item">Гамбургер</div>
            <div className="category-item">Чизбургер</div>
            <div className="category-item">Чёрный бургер</div>
            <div className="category-item active">Чикенбургер</div>
            <div className="category-item">Фишбургер</div>
          </div>

          <div className="filter">
            <img className="arrow" src={arrow} alt="arrow" />
            <div className="filter-text">Сортировать по: </div>
            <div className="filter-btn">популярности</div>
          </div>
        </div>

        <div className="items">
          <div className="title">Все бургеры</div>
          <div className="items-wrap">

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="item-img" src={burger} alt="item" />
              <div className="item-title">Чикенбургер</div>
              <div className="settings">
                <div className="settings-item active">Яйцо</div>
                <div className="settings-item">Лук белый</div>
                <div className="settings-item">Помидоры</div>
                <div className="settings-item">Бекон</div>
                <div className="settings-item">Перец халапенью</div>
              </div>
              <div className="purchase">
                <div className="price">от 350 &#8381; </div>
                <div className="btn-add">
                  <div className="plus">+</div>
                  <div className="btn-text">Добавить</div>
                  <div className="num">2</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
