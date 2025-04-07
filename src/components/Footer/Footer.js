import logo from '../../logo.png'
import './style.css';

export const Footer=()=> {
    return (
      <footer className="footer">
        <div className="top-footer">
          <div className="logo-segment">
            <div className="logo-segment-img">
              <img src={logo} alt="log"/>
            </div>
            <div className="logo-segment-text">
              Total Environment реализовала проекты общей площадью более 4,5 миллиона квадратных футов для более чем 1 200 клиентов в различных регионах Беларуси, включая Минск, Гродно и Брест.
            </div>
          </div>
          <div className="contact-us">
            <div className="contact-us-text">Свяжитесь с нами</div>
            <hr className="custom-hr"/>
            <div className="contact-us-adress">
              <h3>Total Environment</h3>
              <p>Республика Беларусь <br/>Речица, <br/>ул. Сыдько, д.121</p>
            </div>
            <div className="contact-us-contacts">
              <h3>Продажи:</h3>
              <p>Телефон: +375 29 555 55 55</p>
              <p>Электронная почта: discover@total-environment.com</p>
            </div>
          </div>
        </div>
        <div className="bottom-footer">© 2022 TotalEnvironment | All Rights Reserved</div>
      </footer>
    );
}