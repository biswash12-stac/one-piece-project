import React from 'react';
import aboutimg from '../../assets/char.jpeg';

import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutimg} alt="" className='about-img' />
       
      </div>

      <div className="about-right">
        <h3>About One Piece</h3>
        <h2>I am gonna be King of the Piarates</h2>
        <p>Embark on an epic adventure with "One Piece," a story that follows Monkey D. Luffy and his crew of Straw Hat Pirates as they journey across the Grand Line. Luffy, empowered by the mysterious Gum-Gum Fruit, dreams of finding the legendary treasure known as the "One Piece" and becoming the Pirate King.</p>
        <p>Through countless battles, Luffy and his diverse crew confront powerful enemies, uncover hidden truths, and forge unbreakable bonds. The series combines action, humor, and heartfelt moments, creating an unforgettable experience for viewers.</p>
        <p>Whether you're drawn by the thrilling quests, the rich world-building, or the deep themes of friendship and freedom, "One Piece" offers a captivating narrative that continues to inspire and entertain fans around the globe</p>
      </div>
    </div>
  );
};

export default About;
