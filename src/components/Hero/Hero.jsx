import React from 'react';
import Image from 'next/image';
import Women from '../../assets/2.jpg';
import "./Hero.scss";
// import 'tailwindcss/tailwind.css';


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








    // <header className="relative h-80vh">
    //   <div className="absolute top-0 left-0 w-full h-full">
    //     <Image
    //       src={Women}
    //       alt="women looking at you"
    //       layout="fill"
    //       objectFit="cover"
    //       quality={100}
    //     />
    //     <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    //   </div>
    //   <div className="container mx-auto px-4 relative h-full flex flex-col justify-center items-center font-task">
    //     <h1 className="text-4xl font-semibold mb-4">Multor</h1>
    //     <h2 className="text-6xl font-bold font-task leading-tight mb-6">
    //       Giant Heading of 5-6 Words
    //     </h2>
    //     <p className="text-xl leading-relaxed text-#152F2E">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
    //       ex ac dignissim convallis, sem felis consequat elit, vitae efficitur tortor
    //       ipsum a mi.
    //     </p>
    //   </div>
    // </header>