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
import {DropdownFilter} from '../../components/DropdownFilter/DropdownFilter.js'
import {RealtyCard} from '../../components/RealtyCard/RealtyCard.js'
import { useState, useEffect } from 'react';

export const Objects=()=> {

    const filterOptions = [
      { value: 'all', label: 'Все' },
      { value: 'studio', label: 'Студии' },
      { value: '1bed', label: '1 Спальня' },
      { value: '2bed', label: '2 Спальни' },
    ];

    const allCards = [
      {
          id: 1,
          imageSrc: card_1_img,
          locationText: "Зелёный Луг, Минск.",
          bedText: "1 Спальня",
          bathText: "1 Ванна",
          squareText: "535 кв. м.",
          type: '1bed' 
      },
      {
          id: 2,
          imageSrc: card_2_img,
          locationText: "Домбровка, Минск.",
          bedText: "2 Спальни",
          bathText: "3 Ванны",
          squareText: "535 кв. м.",
          type: '2bed'
      },
      {
          id: 3,
          imageSrc: card_3_img,
          locationText: "Лебяжий, Минск.",
          bedText: "1 Спальня",
          bathText: "1 Ванна",
          squareText: "535 кв. м.",
          type: '1bed'
      },
      {
          id: 4,
          imageSrc: card_4_img,
          locationText: "Уручье, Минск.",
          bedText: "1 Спальня",
          bathText: "1 Ванна",
          squareText: "535 кв. м.",
          type: '1bed'
      },
      {
          id: 5,
          imageSrc: card_5_img,
          locationText: "Малиновка, Минск.",
          bedText: "1 Спальня",
          bathText: "1 Ванна",
          squareText: "535 кв. м.",
          type: '1bed'
      },
      {
          id: 6,
          imageSrc: card_6_img,
          locationText: "Ольшанка, Гродно.",
          bedText: "1 Спальня",
          bathText: "1 Ванна",
          squareText: "535 кв. м.",
          type: '1bed'
      }
  
    ];

    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleCards, setVisibleCards] = useState(allCards);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (activeFilter === 'all') {
            setVisibleCards(allCards);
        } else {
            const filtered = allCards.filter(card => {
                if (activeFilter === 'studio') {
                    return card.bedText.toLowerCase().includes('студия');
                }
                return card.type === activeFilter;
            });
            setVisibleCards(filtered);
        }
        setShowAll(false); 
    }, [activeFilter, allCards]);

    const handleShowMore = () => {
        setShowAll(true);
    };

    const cardsToShow = showAll ? visibleCards : visibleCards.slice(0, 6);

    return (
    <>
      <Header/>
      <main>
        <div className='button-section'>
          <DropdownFilter 
            options={filterOptions}
            activeOption={activeFilter}
            onSelect={setActiveFilter}
          />
        </div>
        <div className="container">
          {cardsToShow.map((card) => (
            <RealtyCard
              key={card.id}
              imageSrc={card.imageSrc}
              locationText={card.locationText}
              bedText={card.bedText}
              bathText={card.bathText}
              squareText={card.squareText}
            />
          ))}
        </div>
        {visibleCards.length > 3 && !showAll && (
          <div className="more-section">
            <button className="more-button" onClick={handleShowMore}>
              <img src={vector_img} alt="Иконка" className="vector-img"/>
            </button>
            <div className="view-text">Больше</div>
          </div>
        )}
      </main>
      <Footer/>
    </>
    );
}