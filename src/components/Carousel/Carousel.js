import './style.css';
import React, { useState, useEffect } from 'react';

export const Carousel= ({ items, interval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const nextSlide = () => {
      setActiveIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer); 
    }, [activeIndex, interval]); 
  
    return (
      <div className="carousel">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="client-photo">
                <img src={item.avatar} alt="Иван Петров" loading="lazy"/>
              </div>
              <div className="review-content">
                <h3>{item.name}</h3>
                <p className="review-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        {}
        <div className='carousel-controls'>
            <button className="carousel-control-prev" onClick={prevSlide}>
            &#10094;
            </button>
            {}
            <div className="carousel-indicators">
            {items.map((_, index) => (
                <button
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                />
            ))}
            </div>
            <button className="carousel-control-next" onClick={nextSlide}>
            &#10095;
            </button>
        </div>
      </div>
    );
  };