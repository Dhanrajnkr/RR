import React, { useState }   from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };
  const overlayContent = {
    plan: {
      title: "PLAN",
      details: [
        "<strong>Plan a Ride </strong>- Create your own routes or join fellow riders",
        "<strong>Solo & Club Rides </strong>- Ride individually or with groups"
      ]
    },
    share: {
      title: "SHARE",
      details: [
        "<strong>Experiences</strong> - Share experiences by showcasing your current or previous rides in the form of pics and captions",
        "<strong>Photos </strong>- Share pics of your bikes or rides to the world as and when you are enjoying your ride"
      ]
    },
    connection: {
      title: "CONNECTION",
      details: [
        "<strong>Build Community</strong> - Engage with other riders and share your experiences to build a bikers community",
        "<strong>Connect Riders</strong> - Connect to other riders by joining multiple riders or clubs and creating memories"
      ]
    },
    sponsorship: {
      title: "SPONSORSHIP",
      details: [
        "<strong>Connect to Sponsors</strong> - Get Sponsorship from sponsors and grow as a rider",
        "<strong>Advertising</strong> - Advertise through riders or clubs by spreading awareness of a social cause or product"
      ]
    }
  };
  const scrollToAppImg = () => {
    const appImgElement = document.querySelector('.app-img');
    appImgElement.scrollIntoView({ behavior: 'smooth' });
  };
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/features');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className='home-container'>
       <img className='home-img' src="./assets/bikehome-new.png" alt="" />    
       {/* <h1 className='hI-top'>Feel the < span style={{color:"#FFDD00"}}>  Road,</span> </h1>
      <span className='hI-down  '>Fuel the < span style={{color:"#FFDD00"}}> Soul.</span> </span>   */}
          <div className='ourapp-explain'>
                      <p>
                          Welcome to <span style={{color:"#FFDD00"}}> Real Roadies</span>, the app designed to unite motorcyclists alike, whether you're cruising on highways or exploring off-road trails. Our platform connects riders from all over the world, offering a space for sharing experiences, discovering new routes, and enhancing the biking lifestyle. Biker Connection is more than just an app—it's a global community built for bikers, by bikers.
                      </p>
                      
                         <img className='app-img' src="./assets/app-img.png" alt="" />
                     <div className='download-btn'>
                     <a className="down-load" href="https://play.google.com/store/apps/details?id=com.stipe.realroadies">
                          <img className='playstore-img' src="./assets/playstore.png" alt="Responsive Image" />
                     </a>
                     <a className="down-load" href="https://apps.apple.com/in/app/real-roadies/id6447089895">
                          <img className='appstore-img' src="./assets/appstore.png" alt=""/>  
                     </a>
                     </div> 
                     
                         <img className='qr-img' src="./assets/rr-qr.png" alt="Responsive Image" />     
                         <p className='qr-top'>Scan to Download the app</p>  
                </div>
                
                {/* features area */}
                 {/* <div className='home-features1'>
                <div className='planing-container'  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
                               <img className='planing-img' src="./assets/planing-img.png"  alt="Responsive Image"/> 
                                    <div className='planing-txt'>
                                       <span className='planing-imgtxt'>PLAN</span>
                                    </div> 
                            </div>
                            <div className='share-container'>
                               <img className='share-img' src="./assets/share-img.png"  alt="Responsive Image"/> 
                                    <div className='share-txt'>
                                       <span className='share-imgtxt'>SHARE</span>
                                    </div> 
                             </div>
                </div>
                <div className='home-features2'>            
                            <div className='connection-container'>
                               <img className='connection-img' src="./assets/connection-img.png"  alt="Responsive Image"/> 
                                    <div className='connection-txt'>
                                       <span className='connection-imgtxt'>CONNECTION</span>
                                    </div> 
                            </div>
                            <div className='sponsorship-container'>
                               <img className='sponsorship-img' src="./assets/sponsorship-img.png"  alt="Responsive Image"/> 
                                    <div className='sponsorship-txt'>
                                       <span className='sponsorship-imgtxt'>SPONSORSHIP</span>
                                    </div> 
                            </div> 
                       </div> */}




                       {/* new features area */}

                       <div className='home-features1'>
  <div className='planing-container' 
    onMouseEnter={() => setHoveredItem('plan')}
    onMouseLeave={() => setHoveredItem(null)}>
    <img className='planing-img' src="./assets/planing-img.png" alt="Responsive Image"/> 
    <div className='planing-txt' style={{opacity: hoveredItem === 'plan' ? 0 : 1}}>
      <span className='planing-imgtxt'>PLAN</span>
    </div>
    {hoveredItem === 'plan' && (
      <div className='overlay-content'>
        <h3>{overlayContent.plan.title}</h3>
        {overlayContent.plan.details.map((detail, index) => (
  <p key={index} dangerouslySetInnerHTML={{__html: detail}}></p>
))}

      </div>
    )}
  </div>
   <div className='share-container'
    onMouseEnter={() => setHoveredItem('share')}
    onMouseLeave={() => setHoveredItem(null)}>
    <img className='share-img' src="./assets/share-img.png" alt="Responsive Image"/> 
    <div className='share-txt' style={{opacity: hoveredItem === 'share' ? 0 : 1}}>
      <span className='share-imgtxt'>SHARE</span>
    </div>
    {hoveredItem === 'share' && (
      <div className='overlay-content'>
        <h3>{overlayContent.share.title}</h3>
        {overlayContent.share.details.map((detail, index) => (
  <p key={index} dangerouslySetInnerHTML={{__html: detail}}></p>
))}

      </div>
    )}
  </div>
</div>
<div className='home-features2'>            
  <div className='connection-container'
    onMouseEnter={() => setHoveredItem('connection')}
    onMouseLeave={() => setHoveredItem(null)}>
    <img className='connection-img' src="./assets/connection-img.png" alt="Responsive Image"/> 
    <div className='connection-txt' style={{opacity: hoveredItem === 'connection' ? 0 : 1}}>
      <span className='connection-imgtxt'>CONNECTION</span>
    </div>
    {hoveredItem === 'connection' && (
      <div className='overlay-content'>
        <h3>{overlayContent.connection.title}</h3>
        {overlayContent.connection.details.map((detail, index) => (
  <p key={index} dangerouslySetInnerHTML={{__html: detail}}></p>
))}

      </div>
    )}
  </div>
  
  <div className='sponsorship-container'
    onMouseEnter={() => setHoveredItem('sponsorship')}
    onMouseLeave={() => setHoveredItem(null)}>
    <img className='sponsorship-img' src="./assets/sponsorship-img.png" alt="Responsive Image"/> 
    <div className='sponsorship-txt' style={{opacity: hoveredItem === 'sponsorship' ? 0 : 1}}>
      <span className='sponsorship-imgtxt'>SPONSORSHIP</span>
    </div>
    {hoveredItem === 'sponsorship' && (
      <div className='overlay-content'>
        <h3>{overlayContent.sponsorship.title}</h3>
        {overlayContent.sponsorship.details.map((detail, index) => (
  <p key={index} dangerouslySetInnerHTML={{__html: detail}}></p>
))}

      </div>
    )}
  </div>
</div>
             {/* app preveiw area */}
       <div className="app-preveiw-container">
        <h1 className='app-preveiw-head'>
          APP PREVEIW
        </h1>
        <div className="apppreveiw-imgcontainer">
        <img className='app-preimg1' src="./assets/app1.png" alt="Responsive Image" />
        <img className='app-preimg2' src="./assets/app2.png" alt="Responsive Image" />
        <img className='app-preimg3' src="./assets/app3.png" alt="Responsive Image" />
        <img className='app-preimg4' src="./assets/app4.png" alt="Responsive Image" />
        <img className='app-preimg5' src="./assets/app5.png" alt="Responsive Image" />
        <img className='app-preimg6' src="./assets/app6.png" alt="Responsive Image" />
        </div>
        <div className='app-download-btn-container'>
        <button className='app-download-btn' onClick={scrollToAppImg} >DOWNLOAD</button>
        <button className='app-explore-btn'onClick={() => navigate('/features')}>EXPLORE</button>
        </div>
        

        
      
       </div>   
                      
                        
                                           
                      
    </div>
  )
}

export default Home

