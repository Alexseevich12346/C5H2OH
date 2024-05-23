import React, { useState } from 'react';
import { salesData } from './salesData';// // Подключаем данные о продажах
import '../App.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === salesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? salesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Назад</button>
      <div className="slide">
        <img src={salesData[currentIndex].image} alt={salesData[currentIndex].product} className="product-image" />
        <h2>{salesData[currentIndex].product}</h2>
        <p>{salesData[currentIndex].description}</p>
        <p>{salesData[currentIndex].price}</p>
      </div>
      <button onClick={nextSlide}>Вперед</button>
    </div>
  );
};

export default Carousel;

