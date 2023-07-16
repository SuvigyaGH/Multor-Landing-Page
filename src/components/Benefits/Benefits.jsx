"use client";

import Image from "next/image";
import React, { useState } from "react";
import Heart from "../../assets/heart.png";
import Tv from "../../assets/tv.png";
import Award from "../../assets/award.png";
import "./Benefits.scss";

const Benefits = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    appointmentType: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    // Set showModal to true if all fields are valid and filled in
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="benefitsSection">
      <div className="leftSection">
        <div className="benefitRows">
          <div className="benefitRowColumn">
              <Image className="images" src={Tv} alt="Benefit 1" />
            <div className="benefitRowText">
              <h3>Benefit 1 Heading</h3>
              <p>Highlight the benefits of signing up for an appointment, online class, or video consultation.</p>
            </div>
          </div>
          <div className="benefitRowColumn">
              <Image className="images" src={Heart} alt="Benefit 2" />
            <div className="benefitRowText">
              <h3>Benefit 2  Heading</h3>
              <p>For example, fitness instructors might describe how their routines make people healthier *and* happier.</p>
            </div>
          </div>
          <div className="benefitRowColumn">
              <Image className="images" src={Award} alt="Benefit 3" />
            <div className="benefitRowText">
              <h3>Benefit 3 Heading</h3>
              <p>Remind visitors how easy it is to claim your offer and start enjoying the benefits.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="formHeading">
            <h2>Schedule an Appointment</h2>
            <p>
              Here, let visitors know what will happen when they complete your
              form.
            </p>
          </div>
          <div className="formFields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formValues.firstName}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formValues.lastName}
              onChange={handleFormChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formValues.email}
              onChange={handleFormChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              value={formValues.phoneNumber}
              onChange={handleFormChange}
            />
            <select
              name="appointmentType"
              value={formValues.appointmentType}
              onChange={handleFormChange}
            >
              <option value="">Select Appointment Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
            <button type="submit">Schedule Now</button>
          </div>

          {showModal && (
            <div className="modal">
              <p>Thank you for scheduling your appointment!</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Benefits;
