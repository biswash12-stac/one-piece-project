import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/zoro.jpg'
import gallery_2 from '../../assets/sanji.jpg'
import gallery_3 from '../../assets/nam.jpeg'
import gallery_4 from '../../assets/brook.jpeg'
import white_arrow from '../../assets/whitearrow.png'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See More <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
