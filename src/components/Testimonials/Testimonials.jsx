import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import user1 from '../../assets/zoro.jpg'
import user2 from '../../assets/sanji.jpg'
import user3 from '../../assets/brook.jpeg'
import user4 from '../../assets/nam.jpeg'


const Testimonials = () => {

const slider= useRef();
let tx=0;


const slideForward=()=>{
if(tx>-50)
{
    tx-=25;
}
slider.current.style.transform=`translateX(${tx}%)`
}

const slideBackward=()=>{
    if(tx<0)
        {
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
}


  return (
    <div className='testimonials'>
      <img src={nexticon} alt="" className='next-btn' onClick={slideForward} />
      <img src={backicon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li> <div className="slide">
            <div className="user-info">
                <img src={user1} alt="" />
                <div>
                    <h3>
                      Zoro
                    </h3>
                    <span>Right Hand man</span>
                </div>
                </div>
                <p>
                Roronoa Zoro is the swordsman of the Straw Hat Pirates, known for his unwavering loyalty and incredible strength. Wielding three swords, his dream is to become the world's greatest swordsman</p>
                </div>
                
                </li>
                <li> <div className="slide">
            <div className="user-info">
                <img src={user2} alt="" />
                <div>
                    <h3>
                      Sanji
                    </h3>
                    <span>Cook of the crew</span>
                </div>
                </div>
                <p>Sanji is the Straw Hat Pirates' cook, renowned for his culinary skills and powerful kicks. With a chivalrous nature and a dream to find the All Blue, he fiercely protects his crew.</p>
                </div>
                
                </li>
                <li> <div className="slide">
            <div className="user-info">
                <img src={user3} alt="" />
                <div>
                    <h3>
                      Brook
                    </h3>
                    <span>Musician</span>
                </div>
                </div>
                <p>Brook, the musician of the Straw Hat Pirates, is a living skeleton with a love for music and humor. Wielding a sword-cane, he dreams of reuniting with an old friend from the past.</p>
                </div>
                
                </li>
                 <li> <div className="slide">
            <div className="user-info">
                <img src={user4} alt="" />
                <div>
                    <h3>
                      Navi
                    </h3>
                    <span>Navigatior of the crew</span>
                </div>
                </div>
                <p>Nami, the navigator of the Straw Hat Pirates, possesses exceptional cartography skills and a sharp intellect. With a dream to map the world, she guides the crew through treacherous seas and dangers.</p>
                </div>
                
                </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
