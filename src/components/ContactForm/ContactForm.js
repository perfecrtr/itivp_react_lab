import './style.css';
import { useState } from 'react';

export const ContactForm=()=> {

  const buttons = [
    { value: 'sale', label: 'Продажа' },
    { value: 'rent', label: 'Аренда' },
  ];

  const [activeButton, setActiveButton] = useState(buttons[0].value);

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  return (
    <div className="ContactForm">
      <div className="ContactForm-text"><span className="spec_yel">Свяжитесь</span> с нами</div>
      <div className="ContactForm-container">
        <div className="main-content">
          <div className="option-buttons">
            {buttons.map((button) => (
              <button
                key={button.value}
                className={`option-button ${activeButton === button.value ? 'active' : ''}`}
                onClick={() => handleButtonClick(button.value)}
                data-value={button.value}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className="content-group">
            <input type="text" id="full-name" name="full-name" placeholder="ФИО" maxLength="30" minLength="3" required/>
          </div>
          <div className="content-group">
            <input type="tel" id="phone-number" name="phone-number" placeholder="Номер телефона" maxLength="14" minLength="3" required/>
          </div>
          <div className="content-group">
            <input type="email" id="email" name="email" placeholder="Электронная почта" maxLength="20" minLength="3" required/>
          </div>
          <button type="submit" className="submit-button">Отправить</button>
        </div>
      </div>
    </div>
  );
}
