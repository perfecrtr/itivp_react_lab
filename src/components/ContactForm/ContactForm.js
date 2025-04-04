import './style.css';

export const ContactForm=()=> {
  return (
    <div className="ContactForm">
      <div className="ContactForm-text"><span className="spec_yel">Свяжитесь</span> с нами</div>
      <div className="ContactForm-container">
        <div className="main-content">
          <div className="option-buttons">
            <button type="button" className="option-button active" data-value="sale">Продажа</button>
            <button type="button" className="option-button" data-value="rent">Аренда</button>
          </div>
          <div className="content-group">
            <input type="text" id="full-name" name="full-name" placeholder="ФИО" maxlength="30" minlength="3" required/>
          </div>
          <div className="content-group">
            <input type="tel" id="phone-number" name="phone-number" placeholder="Номер телефона" maxlength="14" minlength="3" required/>
          </div>
          <div className="content-group">
            <input type="email" id="email" name="email" placeholder="Электронная почта" maxlength="20" minlength="3" required/>
          </div>
          <button type="submit" className="submit-button">Отправить</button>
        </div>
      </div>
    </div>
  );
}
