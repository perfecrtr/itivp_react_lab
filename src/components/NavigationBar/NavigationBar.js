import logo from '../../logo.png'
import menu from './menu.svg'
import './style.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const NavigationBar=()=> {

    const buttons = [
      { value: '/', label: 'Главная' },
      { value: '/objects', label: 'Объекты' },
      { value: '/about', label: 'О компании' },
      { value: '/services', label: 'Услуги' },
      { value: '/contacts', label: 'Контакты' },

    ];
    
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);

    useEffect(() => {
      setActiveButton(location.pathname);
    }, [location.pathname]);


    return (
        <nav className="navigation">
          <div className="logo">
            <img src={logo} alt="Логотип"/>
          </div>
          <img src={menu} alt="burger-menu" className="burger-menu"/>
          <ul className="navigation-list">
            {buttons.map((button) => (
              <li key={button.value} className="navigation-item">
                <NavLink to={button.value}
                  key={button.value}
                  className={({isActive})=>`navigation-button ${isActive ? 'navigation-button-active' : ''}`}
                >
                  {button.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
    );
}
