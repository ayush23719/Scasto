import React from 'react'
import '../Styles/Contact.css'
import { SocialIcon } from 'react-social-icons';
import Lottie from 'react-lottie';
import animationData from '../Assets/contact';
export default function Contact() {
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
      <div className="container-contact">
        <header className="reachmeout">
          <h1><span className="txt-3">Reach</span><span className="txt-4">Me </span><span className='txt-5'>Out</span></h1>
          <p className="contact-text">Thanks for Visiting my website!If you liked my work and want to reach out to me, please feel free to do so. You can connect with me on the following platforms.</p>

        </header>
        <div className="socials">
          <SocialIcon url="https://github.com/ayush23719" />
          <SocialIcon url="https://www.linkedin.com/in/ayush-pratap-singh-210b38197/" />
          <SocialIcon url="https://twitter.com/iiush_ps" />
          <SocialIcon url="discordapp.com/users/728542166313467906" />
          <SocialIcon url="mailto:ayush23719@gmail.com" />
        </div>
        <div className="contact-img">
          <Lottie options={defaultOptions} />
        </div>

      </div>
    </>
  )
}
