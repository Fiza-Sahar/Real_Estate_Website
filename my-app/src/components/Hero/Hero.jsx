import React from 'react';
import hero from '../../Assets/Images/Hero-img.png';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

import './Hero.css';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>Discover <br/>Your Dream <br/>Property</h1>
          </div>
          <div className="flexColstart hero-des">
            <span className="label">
Explore top listings tailored to your needs and connect with trusted agents.</span> <br/>
<span className="label">Find your perfect home effortlessly and start living your dream today.</span>
          </div>

          <div className="search-bar">
           <HiLocationMarker color="var(--blue)" size={25}/>
           <input type="text" placeholder='Search....' />
           <button className='button'>Search</button>
          </div>
          <div className="flexCenter stats">
  <div className="flexColStart stat">
    <span className="number">
      <CountUp start={8800} end={9000} duration={4} />
      <span className="plus">+</span>
    </span>
    <span className="label">Premium Products</span>
  </div>
  
  <div className="flexColStart stat">
    <span className="number">
      <CountUp start={1950} end={2000} duration={4} />
      <span className="plus">+</span>
    </span>
    <span className="label">Happy Customers</span>
  </div>

  <div className="flexColStart stat">
    <span className="number">
      <CountUp end={28} duration={4} />
      <span className="plus">+</span>
    </span>
    <span className="label">Award Winning</span>
  </div>
</div>

        </div>
        <div className="flexCenter hero-right">
              <div className="image-container">
              <img src={hero} width={100} alt="Logo" />
              </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
