import React from 'react';
import Image from 'next/image';
import Woman from '../../assets/woman.webp';
import './About.scss';

const AboutSection = () => {
  return (
    <div className="aboutSection">
      <div className="leftSection">
        <Image className="img" src={Woman} alt="About" />
      </div>
      <div className="rightSection">
        <h2 className="sectionTitle">About</h2>
        <h3 className="mainHeading">Some more information about your business</h3>
        <p className="subHeading">
        Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
