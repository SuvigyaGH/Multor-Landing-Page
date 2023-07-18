import React from 'react';
import Image from 'next/image';
import StarIcon from '../../assets/star.png';
import Person from '../../assets/person.png';
import Image1 from '../../assets/Feature.webp';
import Image2 from '../../assets/Feature2.webp';
import Image3 from '../../assets/Feature3.webp';
import './Reviews.scss';

const ReviewsSection = () => {
  return (
    <div className="reviewsSection">
      <h2 className="sectionHeading">Don&apos;t Just take our word for it...</h2>
      <div className="reviewsContainer">
        <div className="review">
          <div className="stars">
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
          </div>
          <h3 className="reviewHeading">Share a real testimonial that hits some of your benefits (but is not too sales-y).</h3>
          <div className="reviewContent">
            <Image src={Person} alt="Person" className="personIcon" />
            <div className="personInfo">
              <p className="personName">John Doe</p>
              <p className="personLocation">New York, USA</p>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="stars">
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
            <Image src={StarIcon} alt="Star" />
          </div>
          <h3 className="reviewHeading">Include someone talking about how easy it was to sign up and participate.</h3>
          <div className="reviewContent">
            <Image src={Person} alt="Person" className="personIcon" />
            <div className="personInfo">
              <p className="personName">Jane Smith</p>
              <p className="personLocation">London, UK</p>
            </div>
          </div>
        </div>
      </div>
      <div className="galleryContainer">
        <div className="galleryItem">
          <Image src={Image1} alt="Image 1" />
          <h3 className="imageHeading">Feature 1</h3>
          <p className="imageDescription">Talk about some of the details of your offer with a focus on the value people get back.</p>
        </div>
        <div className="galleryItem">
          <Image src={Image2} alt="Image 2" />
          <h3 className="imageHeading">Feature 2</h3>
          <p className="imageDescription">Is there a pain point that your service resolves? Tell visitors about it here in your findings.</p>
        </div>
        <div className="galleryItem">
          <Image src={Image3} alt="Image 3" />
          <h3 className="imageHeading">Feature 3</h3>
          <p className="imageDescription">Alternatively, you could use this section to address some frequently asked questions.</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
