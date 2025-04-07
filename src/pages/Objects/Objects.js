import './style.css';
import card_1_img from './card_1.png'
import card_2_img from './card_2.png'
import card_3_img from './card_3.png'
import card_4_img from './card_4.png'
import card_5_img from './card_5.png'
import card_6_img from './card_6.png'
import vector_img from './Vector.png'
import {Footer} from '../../components/Footer/Footer.js'
import {Header} from '../../components/Header/Header.js'
import {RealtyCard} from '../../components/RealtyCard/RealtyCard.js'
import { useState } from 'react';

export const Objects=()=> {

    const buttons = [
      { value: 'all', label: 'Все' },
      { value: 'studio', label: 'Студии' },
      { value: '1bed', label: '1 Спальня' },
      { value: '2bed', label: '2 Спальни' },
    ];

    const [activeButton, setActiveButton] = useState(buttons[0].value);
      const handleButtonClick = (value) => {
      setActiveButton(value);
     };

    return (
    <>
      <Header/>
      <main>
        <div className="button-section">
          {buttons.map((button) => (
            <button
              key={button.value}
              className={`filter-button ${activeButton === button.value ? 'active' : ''}`}
              onClick={() => handleButtonClick(button.value)}
              data-value={button.value}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="container">
          <RealtyCard
            imageSrc={card_1_img}
            locationText={"Зелёный Луг, Минск."}
            bedText={"1 Спальня"}
            bathText={"1 Ванна"}
            squareText={"535 кв. м."}
          />
          <RealtyCard
            imageSrc={card_2_img}
            locationText={"Домбровка, Минск."}
            bedText={"2 Спальни"}
            bathText={"3 Ванны"}
            squareText={"535 кв. м."}
          />
          <RealtyCard
            imageSrc={card_3_img}
            locationText={"Лебяжий, Минск."}
            bedText={"1 Спальня"}
            bathText={"1 Ванна"}
            squareText={"535 кв. м."}
          />
          <RealtyCard
            imageSrc={card_4_img}
            locationText={"Уручье, Минск."}
            bedText={"1 Спальня"}
            bathText={"1 Ванна"}
            squareText={"535 кв. м."}
          />
          <RealtyCard
            imageSrc={card_5_img}
            locationText={"Малиновка, Минск."}
            bedText={"1 Спальня"}
            bathText={"1 Ванна"}
            squareText={"535 кв. м."}
          />
          <RealtyCard
            imageSrc={card_6_img}
            locationText={"Ольшанка, Гродно."}
            bedText={"1 Спальня"}
            bathText={"1 Ванна"}
            squareText={"535 кв. м."}
          />
        </div>
        <div className="more-section">
          <button className="more-button">
            <img src={vector_img} alt="Иконка" className="vector-img"/>
          </button>
          <div className="view-text">Больше</div>
        </div>
      </main>
      <Footer/>
    </>
    );
}