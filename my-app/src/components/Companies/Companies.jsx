import React from 'react'
import './Companies.css';
import prologis from '../../Assets/Images/prologis.png';
import Equinis from '../../Assets/Images/Equinis.png';
import tower from '../../Assets/Images/tower.png';
import realty from '../../Assets/Images/realty.png';

function Companies() {
  return (
   <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">
     
      <img  src={prologis} width={100} alt="prologis" />
      <img src={tower} width={100} alt="tower" />
      <img src={Equinis} width={100} alt="Equinis" />
      <img src={realty} width={100} alt="realty" />
        {/* <img src="logo2.png" alt="Logo 2"/>
        <img src="logo3.png" alt="Logo 3"/> */}
        
     


    </div>
   </section>
  )
}

export default Companies
