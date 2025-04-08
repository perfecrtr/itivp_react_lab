import './style.css';
import award_1 from './award_1.png'
import award_2 from './award_2.png'
import avatar from './Ellipse 14.png'
import {Footer} from '../../components/Footer/Footer.js'
import {Header2} from '../../components/Header/Header2.js'
import {Carousel} from '../../components/Carousel/Carousel.js'

export const AboutUs=()=> {

    const testimonials = [
      {
        name: "Анна Петрова",
        text: "Очень профессиональные агенты! Помогли найти идеальную квартиру за неделю. Все этапы сделки сопровождали лично.",
        avatar: avatar
      },
      {
        name: "Мария Петрова",
        text: "Продали мою квартиру выше рыночной цены. Отдельное спасибо за честную оценку и грамотные рекомендации.",
        avatar: avatar
      },
      {
        name: "Александра Алексеевна",
        text: "Здесь вы можете найти дом мечты по вашему выбору без стресса. Здесь вы можете найти дом мечты по вашему выбору без стресса. Здесь вы можете найти.",
        avatar: avatar
      }
    ];
  
    return (
    <>
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
            <Carousel items={testimonials} interval={5000}/>
          </section>
        </div>
      </main>
      <Footer/>
    </>
    );
}