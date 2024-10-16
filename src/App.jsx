import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='One Piece' title='The World of One Piece' />
        <Programs />
        <About  />
        <Title subTitle='Straw hat piarate' title='Crew Photo' />
        <Campus />
        <Title subTitle='About Character' title='Background' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    
    </div>
  );
};

export default App;
