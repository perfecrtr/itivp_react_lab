import background_image from './background_1.png'
import './style.css';
import {NavigationBar} from '../NavigationBar/NavigationBar.js'

export const Header2=()=> {
    return (
      <header className="header">
        <img src={background_image} alt="background" className="background-image"/>
        <NavigationBar/>
        <div className="header-content">
          <div className="overlay">
            Найдите Ваш <span className="spec_yel">Дом Мечты</span> с нами
          </div>
        </div>
        <div className="shadow"></div>
      </header>
    );
}