import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha'; // Import Google reCAPTCHA component
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../Wrapper';
import './Footer.css';
import { ReturnConfig } from '../../config';

const Footer = () => {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null); // State to hold reCAPTCHA value

  const { from_name, from_email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!recaptchaValue) {
      alert('Please verify that you are not a robot.');
      setLoading(false);
      return;
    }

    const config = ReturnConfig();

    emailjs
      .sendForm(config.serviceId, config.templateId, e.target, config.accountId)
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );

    setFormData({ from_name: '', from_email: '', message: '' });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:inventivenex@gmail.com" className="p-text">
            inventivenex@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+ 91 9872 159 726" className="p-text">
            + 91 9872 159 726
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="from_name"
              value={from_name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="from_email"
              value={from_email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text p-3"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPCHA_KEY}
            onChange={handleRecaptchaChange}
            style={{ display: 'inline-block', marginBottom: '10px' }}
          />
          <button type="submit" className="p-text" disabled={loading}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact us', 'app__whitebg');
