import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark_arrow.png'; 

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1> Embark the Grand Line Adventure</h1>
        <p>What is Onepiece</p>
        <button className='btn'>
          Explore More <img src={dark_arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
