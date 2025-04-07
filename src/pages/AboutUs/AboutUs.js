import './style.css';
import award_1 from './award_1.png'
import award_2 from './award_2.png'
import avatar from './Ellipse 14.png'
import {Footer} from '../../components/Footer/Footer.js'
import {Header2} from '../../components/Header/Header2.js'

export const AboutUs=()=> {
    return (
    <body className="body">
      <Header2/>
      <main>
        <div className="container">
          <section className="awards">
            <h2>Награды</h2>
            <hr className="custom-hr1"/>
            <div className="awards-grid">
              <div className="award">
                <img src={award_1} alt="Award Icon" className="award-icon"/>
                <div className="award-header">
                  <h3>Мировая | 2024</h3>
                  <p>Завершённые здания: Квартиры</p>
                </div>
                <div className="award-footer">
                  <p><span>Организация:</span> Новый фестиваль</p>
                  <p><span>Проект:</span> Фиолетовый луг, Гродно</p>
                </div>
              </div>
              <div className="award">
                <img src={award_1} alt="Award Icon" className="award-icon"/>
                <div className="award-header">
                  <h3>Мировая | 2023</h3>
                  <p>Завершённые здания: Дома</p>
                </div>
                <div className="award-footer">
                  <p><span>Организация:</span> Новый фестиваль</p>
                  <p><span>Проект:</span> Оранжевый дом, Минск</p>
                </div>
              </div>
              <div className="award">
                <img src={award_2} alt="Award Icon" className="award-icon"/>
                <div className="award-header">
                  <h3>Национальная | 2023</h3>
                  <p>Платиновая сертификация</p>
                </div>
                <div className="award-footer">
                  <p><span>Организация:</span> Организация строителей</p>
                  <p><span>Проект:</span> Зелёный дом, Минск</p>
                </div>
              </div>
              <div className="award">
                <img src={award_2} alt="Award Icon" className="award-icon"/>
                <div className="award-header">
                  <h3>Национальная | 2022</h3>
                  <p>Платиновая сертификация</p>
                </div>
                <div className="award-footer">
                  <p><span>Организация:</span> Организация строителей</p>
                  <p><span>Проект:</span> Красный дом, Брест</p>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonials">
            <h2>Что Говорят Клиенты</h2>
            <h3>Наша цель — в основе всего, что мы делаем. Мы делаем счастье наших клиентов нашим приоритетом.</h3>
            <div className="reviews-slider">
              <div className="slides-container">
                <div className="review-slide active">
                  <div className="client-photo">
                    <img src={avatar} alt="Иван Петров" loading="lazy"/>
                  </div>
                  <div className="review-content">
                    <h3>Анна Петрова</h3>
                    <p className="review-text">"Очень профессиональные агенты! Помогли найти идеальную квартиру за неделю. Все этапы сделки сопровождали лично."</p>
                  </div>
                </div>
                <div className="review-slide">
                  <div className="client-photo">
                    <img src={avatar} alt="Елена Смирнова" loading="lazy"/>
                  </div>
                  <div className="review-content">
                    <h3>Елена Смирнова</h3>
                    <p className="review-text">"Продали мою квартиру выше рыночной цены. Отдельное спасибо за честную оценку и грамотные рекомендации."</p>
                  </div>
                </div>
                <div className="review-slide">
                  <div className="client-photo">
                    <img src={avatar} alt="Елена Смирнова" loading="lazy"/>
                  </div>
                  <div className="review-content">
                    <h3>Александра Алексеевна</h3>
                    <p className="review-text">"Здесь вы можете найти дом мечты по вашему выбору без стресса. Здесь вы можете найти дом мечты по вашему выбору без стресса. Здесь вы можете найти."</p>
                  </div>
                </div>
              </div>
              <div className="slider-controls">
                <button className="prev-btn" aria-label="Предыдущий отзыв">‹</button>
                <div className="dots-container"/>
                <button className="next-btn" aria-label="Следующий отзыв">›</button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </body>
    );
}