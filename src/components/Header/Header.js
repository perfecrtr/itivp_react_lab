import background_image from './background_1.png'
import './style.css';
import {ContactForm} from '../../components/ContactForm/ContactForm.js'
import {NavigationBar} from '../NavigationBar/NavigationBar.js'

export const Header=()=> {
    return (
      <header className="header">
        <img src={background_image} alt="background" className="background-image"/>
        <NavigationBar/>
        <div className="header-content">
          <div className="overlay">
            Найдите Ваш <span className="spec_yel">Дом Мечты</span> с нами
          </div>
          <ContactForm/>
        </div>
        <div className="shadow"></div>
      </header>
    );
}