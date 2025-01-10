import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faHandshake, faCompass, faStore, faShield } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './About.css'

const About = () => {
  return (
    <div classname='about-container'>
      
        <div>
            <img className='about-mainimg' src="./assets/about-main.png" alt="about-main" />
            </div>
            <div className='abuot-heading'><h1>About <span style={{color:"#FFDD00"}}>us</span></h1> </div>
          <div className='about-content'>
            <p>We love bikes. We love travelling. And, we want you to love them too! What started as a biker's connection platform a year ago is now a complete ecosystem of biker's. From biker's connection, from exclusive bike merchandise to road trips and tours, from bike refurbishing and maintenance to stipe solution - we have them all.</p>
            </div>
            <div>
                <span className='about-head'><p className='head1'>Imagine a World with</p><h1 className='head2'>Empty<strong className='head2-0'> Roads</strong></h1>
                 <p className='head3'> & Fellow <strong className='head3-0'>Rider</strong></p>
                  <p className='head4'>  Ride with us to explore the world</p>
                  </span>
                         <img className='about-app-img' src="./assets/app-img.png" alt="" />
                     <div className='about-download-btn'>
                     <a className="about-down-load" href="https://play.google.com/store/apps/details?id=com.stipe.realroadies">
                          <img className='about-playstore-img' src="./assets/playstore.png" alt="Responsive Image" />
                     </a>
                     <a className="about-down-load" href="https://apps.apple.com/in/app/real-roadies/id6447089895">
                          <img className='about-appstore-img' src="./assets/appstore.png" alt=""/>  
                     </a>
                     </div>
                    
                  
                    <img className='about-gif1'src='./assets/about-img1.png'alt='abuot-img1'/>
                    <div>
                        <h1 className='about-ex1-head'><span style={{color:'#FFDD00'}}>WHO</span> WE ARE?</h1>
                        <p className='about-ex1'>Real Roadies is a motorcycling community
initiative where social media and technology
are combined to form a one stop platform for Bikers.</p>

                    <img className='about-gif2'src='./assets/about-img2.png'alt='abuot-img2'/>
                    <h1 className='about-ex2-head'><span style={{color:'#FFDD00'}}>WHY</span> US?</h1>
                     <div className='about-ex2'><p> <FontAwesomeIcon icon={faRoute} className="about-fas-icon" /> plan, connect & share</p>
                     <p> <FontAwesomeIcon icon={faHandshake} className="about-fas-icon" />Bring Sponsors to Riders and Clubs</p>
                     <p><FontAwesomeIcon icon={faCompass} className="about-fas-icon" /> Discover unknown routes</p>
                     <p><FontAwesomeIcon icon={faStore} className="about-fas-icon" /> Enable Motorcycle Commerce</p>
                     <p><FontAwesomeIcon icon={faShield} className="about-fas-icon" /> Promote Safe Riding</p></div> 
                   </div>
                </div>
                           {/* <div className='contact-aboutarea'>
                                      <h3 className='con-abouthead'>Get in touch with Us
                                      </h3>
                                      <div className='contact-aboutadd'>
                                      <div className='contact-aboutadd'>
                             <a href="mailto:stipe.so">
                               <p><FontAwesomeIcon icon={faEnvelope} /> stipe.so</p>
                             </a>
                             
                             <a href="tel:+919448388572">
                               <p><FontAwesomeIcon icon={faPhone} /> +91 9448388572 -- +91 9886115772</p>
                             </a>
                             
                             <a href="https://maps.google.com/?q=247,1st Floor, 4th Main Road, Domlur, 2nd Stage, Bengaluru, 560071" target="_blank" rel="noopener noreferrer">
                               <p><FontAwesomeIcon icon={faLocationDot} /> #247, 1st Floor, 4th Main Road, Domlur, 2nd Stage, Bengaluru, 560071.</p>
                             </a>
                           </div>
                           
                           
                           <div className='social-abouticons'>
                             <a href="https://wa.link/hsqw2s" target='_blank'rel='noopener noreferrer'><FontAwesomeIcon icon={faWhatsapp} /></a>
                             <a href="https://www.facebook.com/fb.realroadies?mibextid=ZbWKwL" target='_blank'rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebookF} /></a>
                             <a href="https://instagram.com/insta.realroadies?igshid=MzRlODBiNWFlZA==" target='_blank'rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a>
                             <a href="https://www.linkedin.com/company/stipesolutions/" target='_blank'rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                           </div>
                           
                                   </div>
                                   </div> */}
                                  
                                                 
    </div>
  )
}

export default About
