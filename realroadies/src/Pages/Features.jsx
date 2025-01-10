import React from 'react'
import './Features.css'
const Features = () => {
    const newLocal = 'feature-ex-img'
  return (
    <div className='features-container'>
           <h1 className='feature-heading'>Features</h1>
              <p className='feature-ex'>The <span style={{color:"#FFDD00"}}>Real roadies </span>is designed to bring together motorcycle  enthusiasts through a range of features that enhance their riding experience. It allows users to create profiles, connect with fellow riders, share biking experiences, and plan routes with navigation tools. The app includes safety features like SOS alerts, bike theft protection, and access to emergency services. Additionally, it offers a marketplace for bikes and gear.
              </p>
                 <img className='feature-eximg' src="./assets/features1 (2).png" 
                 alt="responsive-img"/>    

<div>
                 <div className='feature-specification1'>
                  <div className='connect-riders'>
                     <img className='connect-riders-img' src="./assets/connect-bikers-img.png" alt="responsive-img"/>
                       <h2 className='h1'>CONNECT WITH FELLOW RIDERS</h2>
                     <p>A "Real Roadies" is a platform designed for motorcyclists to connect with other riders, share experiences, and discover new routes. It allows users to find local events, join group rides, and access features like safety tracking and ride planning. These apps help foster a sense of community among bikers, making it easier to meet like-minded individuals, organize rides, and stay informed about biking news and local happenings.
        

                     </p>
                  </div> 
                  <div className='plan-ride'>
                     <img className='plan-ride-img' src="./assets/plan-imgfeature.png" alt="responsive-img"/>
                       <h2 className='h1'>PLAN YOUR NEXT RIDE</h2>
                     <p>Planning your next ride starts with choosing a destination and mapping out a scenic route, using Real Roadies apps like  EatSleepRIDE for guidance. Make sure your bike is in good condition, check the weather, and pack essential gear. If you're riding with others, connect through Real roadies app . Don’t forget to share your route for safety, and most importantly, enjoy the journey!
                     </p>
                  </div>
                  
                  <div className='invite-bikers'>
                     <img className='invite-bikers-img' src="./assets/plan-imgfeature.png" alt="responsive-img"/>
                       <h2 className='h1'>INVITE OTHER BIKERS</h2>
                     <p>To invite other bikers using the RealRoadies app, create a ride event by selecting your destination, route, and time. Share the details within the app and send invitations to fellow riders nearby. You can also share the event on social media or in community groups to attract more participants. The app makes it easy to connect with other bikers and plan group rides.

                     </p>
                  </div> 
                  </div>
                  <div className='feature-specification2'>
                  <div className='get-sponsor'>
                     <img className='get-sponsor-img' src="./assets/sponsor-imgfeature.png" alt="responsive-img"/>
                       <h2 className='h1'>GET SPONSORS</h2>
                     <p>To get ride sponsors on the RealRoadies app, create a high-visibility event or ride with clear details about the audience, route, and expected turnout. Highlight the potential exposure for brands, such as logo placement on event materials or during the ride. Reach out to potential sponsors directly through the app’s networking features or use the app’s promotional tools to offer sponsorship packages, showcasing how their brand will be featured during the ride. This will help attract relevant sponsors interested in connecting with the biking community.
                     </p>

                  </div>
                  <div className='sell-rent'>
                     <img className='sell-rent-img' src="./assets/sponsor-imgfeature.png" alt="responsive-img"/>
                       <h2 className='h1'>BUY/SELL/RENT BIKES</h2>
                     <p>The RealRoadies app lets you buy, sell, or rent both bikes and accessories. You can list your bike or accessories like helmets, jackets, and gear, or explore the marketplace for available items. This feature connects you with other bikers in the community, making it easy to find or offer motorcycles and biking gear all in one place.
                     </p>
                     </div>
                     <div className='planinvite-bikers'>
                     <img className='planinvite-bikers-img' src="./assets/sponsor-imgfeature.png" alt="responsive-img"/>
                       <h2 className='h1'>PLAN RIDE AND INVITE FRIENDS</h2>
                     <p>To plan a ride and invite friends on the RealRoadies app, Navigate to the "Plan Ride" section, then enter your ride details such as destination, date, and time. After setting up the ride, you can invite friends by selecting them from your contacts or entering their details. Once your ride is confirmed, your friends will receive invites and updates. You can track the ride and manage any changes directly through the app.
                     </p>
                     </div>
                     </div> 
                     <div className='download-btn-feature'>
                     <a className="down-load" href="https://play.google.com/store/apps/details?id=com.stipe.realroadies">
                          <img className='playstore-img-feature' src="./assets/playstore.png" alt="Responsive Image" />
                     </a>
                     <a className="down-load" href="https://apps.apple.com/in/app/real-roadies/id6447089895">
                          <img className='appstore-img-feature' src="./assets/appstore.png" alt=""/>  
                     </a>
                     </div> 
                  </div>
                           
    </div>
  )
}

export default Features
