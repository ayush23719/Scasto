import React from 'react';
import '../Styles/Contact.css';
import { SocialIcon } from 'react-social-icons';
import Lottie from 'react-lottie';
import animationData from '../Assets/contact';

function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>

      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact <span style={{ color: '#ffdf6c', fontWeight: 800 }}>Me</span></h1>
          <div className="paragraph-container">
            <p>
              Thank you for visiting my portfolio! If you have any questions, comments, or inquiries, please don't hesitate to contact me through any of the social media channels listed.

              I am always interested in new opportunities and collaborations, so if you have a project in mind, let's discuss how we can work together.
            </p>
            <div className="social-icons">
              <SocialIcon url="https://www.github.com/ayush23719" />
              <SocialIcon url="https://www.linkedin.com/in/ayush-pratap-singh-210b38197/" />
              <SocialIcon url="https://discord.com/users/728542166313467906" />
              <SocialIcon url="https://twitter.com/iiush_ps?t=C5fjfylzVRNfvucNIka6vg&s=09" />
              <SocialIcon url="mailto:ayush23719@gmail.com" />
            </div>
          </div>
        </div>
        <div className="contact-image">
          <Lottie
            options={defaultOptions}
          />
        </div>
      </div>
      <footer className="footer">
        Made with ❤️ By Ayush
      </footer>
    </>
  );
}

export default Contact;
