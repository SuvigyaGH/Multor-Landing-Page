import React from 'react';
import Image from 'next/image';
import Women from '../../assets/2.jpg';
import "./Hero.scss";

const Hero = () => {
  return (

    <div className="heroSection">
      {/* <img src={Girl} alt="" /> */}
      <div className="container">
        <h6 className="companyName">MultOr</h6>
        <h1 className="description">Bring the value of booking an appointment.</h1>
        <p className="additionalText">
        No need to get clever. Tell people exactly what you are offering, then use this space to communicate your key value proposition.
        </p>
      </div>
    </div>
  );
};

export default Hero;
