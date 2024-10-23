import React from 'react';
import hero from '../../Assets/Images/Hero-img.png';
import { HiLocationMarker } from 'react-icons/hi';
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
            <span>
Explore top listings tailored to your needs and connect with trusted agents.</span> <br/>
<span>Find your perfect home effortlessly and start living your dream today.</span>
          </div>

          <div className="search-bar">
           <HiLocationMarker color="var(--blue)" size={25}/>
           <input type="text" placeholder='Search....' />
           <button className='button'>Search</button>
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
