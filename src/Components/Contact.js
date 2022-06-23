import React from 'react'
import '../Styles/Contact.css'
export default function Contact() {
  return (
    <>
      <div className="container-contact">
        <header className="reachmeout">
          <h1><span className="txt-3">Reach</span><span className="txt-4">Me </span><span className='txt-5'>Out</span></h1>
          <span className="contact-text">Want to reach out to me? Sure, why not! </span>
        </header>
        <div className="contact-img">
          <img src={require('../Assets/contact-img.png')} class="contact-fluid" alt="" />
        </div>
      </div>
    </>
  )
}
