import React, { useState } from 'react';
import axios from 'axios';


const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    mobileNo: '',
    email: '',
    enquiry: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3100/enquiries', formData);
      console.log(response.data);

      // Reset form fields
      setFormData({
        company: '',
        name: '',
        mobileNo: '',
        email: '',
        enquiry: ''
      });

      // Optionally set submitted state to true
      setIsSubmitted(true);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="enquiry-form">
      <h1><b>Online Enquiry Form</b></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company">Company*:</label>
          <input
            name="company"
            type="text"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name*:</label>
          <input
            name="name"
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No*:</label>
          <input
            name="mobileNo"
            type="text"
            id="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*:</label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="enquiry">Your Enquiry*:</label>
          <textarea
            name="enquiry"
            id="enquiry"
            rows="4"
            value={formData.enquiry}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-submit">Send</button>
        </div>
      </form>
      {isSubmitted && <p>Your enquiry has been submitted successfully.</p>}
    </div>
  );
};

export default EnquiryForm;
