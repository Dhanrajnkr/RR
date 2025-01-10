import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
const contact = () => {
  
  return (
    <div className='contact-container'>
        <div className='contact-top'>
        <img className='contact-img' src="./assets/contactus-img.png" alt="contact-img" />
           <div className='contact-top-right'>
             <h1>Contact RealRoadies</h1>
             <p>Got questions or need assistance? Feel free to reach out to us! Simply use the contact form below or email us, and we'll get back to you as soon as possible.</p>
              <a href="tel:+919448388572">
                 <p><span style={{color:"blue"}}><FontAwesomeIcon icon={faPhone} /></span> +91 9448388572 /   +91 9886115772</p>
                 <p>Mon – Fri, 9 am to 6 pm</p>
              </a>
              <button onClick={() => window.location.href = 'mailto:stipe.so'}>
              Write to Us</button>
           </div>
        </div>
           <div className='equry-container'>
               <div className="equry-left">
                 <h2 className='h1'>We’re <br/>here to <br/>support you.</h2>
                 <p>Use the form to get in touch. Our office hours are<br/> Mon–Fri, 9 am to 6 pm IST, and we attempt to <br/>respond to support requests within 1-2 business days.</p>
               </div>
               <div className="enquiry-form">
                
              <form >
                 <div className="form-group">
                   <label>Name</label>
                   <input type="text" name="name" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Enter your email address" required />
               </div>
    
               <div className="form-group">
                   <label>Message</label>
                   <textarea name="message" placeholder="Type your message here..." rows="5" required></textarea>
               </div>
               <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
           </div>

          </div>
    </div>
  )
}

export default contact
