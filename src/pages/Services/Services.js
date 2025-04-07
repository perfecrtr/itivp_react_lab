import './style.css';
import {Footer} from '../../components/Footer/Footer.js'
import {Header2} from '../../components/Header/Header2.js'
import { YandexMap } from '../../components/YandexMap/YandexMap.js';

export const Services=()=> {
    return (
    <>
      <Header2/>
      <main>
        <YandexMap/>
        <section className="payment-section">
          <h2>Оплатить</h2>
          <div className="payment-container">
            <form id="payment-form">
              <div className="form-group">
                <label for="amount">Сумма (BYN):</label>
                <input type="number" id="amount" name="amount" value="50" max="10000" min="0" step="1" maxlength="5" required/>
              </div>
              <div id="card-element"/>
              <div id="card-errors" role="alert"/>
              <button id="submit-payment" className="payment-button">Оплатить</button>
            </form>
          </div>
        </section>
      </main>
      <Footer/>
    </>
    );
}