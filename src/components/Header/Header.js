import logo from '../../logo.png'
import background_image from './background_1.png'
import menu from './menu.svg'
import './style.css';
import {ContactForm} from '../../components/ContactForm/ContactForm.js'

export const Header=()=> {
    return (
      <header className="header">
        <img src={background_image} alt="background" className="background-image"/>
        <nav className="navigation">
          <div className="logo">
            <img src={logo} alt="Логотип"/>
          </div>
          <img src={menu} alt="burger-menu" className="burger-menu"/>
          <ul className="navigation-list">
            <li className="navigation-item">
              <button className="navigation-button navigation-button-active">Главная</button>
            </li>
            <li class="navigation-item">
              <button className="navigation-button" onclick='window.location.href="pakages/card.html"'>Объекты</button>
            </li>
            <li class="navigation-item">
              <button className="navigation-button" onclick='window.location.href="pakages/us.html"'>О компании</button>
            </li>
            <li class="navigation-item">
              <button className="navigation-button" onclick='window.location.href="pakages/Services.html"'>Услуги</button>
            </li>
            <li class="navigation-item">
              <button className="navigation-button" onclick='window.location.href="pakages/Contacts.html"'>Контакты</button>
            </li>
          </ul>
        </nav>
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