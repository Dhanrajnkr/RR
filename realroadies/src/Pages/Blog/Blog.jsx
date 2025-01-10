import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
const Blog = () => {
  const navigate = useNavigate()

  const handleIbwClick = () => {
    navigate('/ibw')
  }
  return (
    <div className='blog-container'>
      <h1>The RealRoadies Blogs</h1>
         <div className="blog-item">
          <div className='ibw-blog' onClick={handleIbwClick} style={{ cursor: 'pointer' }}>
                      <img className="ibw-blog-img"src="./assets/ibw-blog-img.png" alt="blog-img" />
            <h2 className='ibw-head'>India Bike Week 2024...</h2>
            <p className='ibw-para'><span>India Bike Week 2024:</span> Marking its 11th year, the India Bike Week (IBW) was hosted in Vagator, Goa. The two-day event, held on the 6th and 7th of December, united over 25,000 bikers under the theme “Everyone as One”. The IBW venue at Vagator was divided into various sections featuring an outdoor and indoor expo, music and community stages, racing, and a dedicated overlanding stage attracting enthusiastic bikers.<strong className='readmore-blog'>Read more</strong></p>
            </div>
            <div className='helmet-blog'>
        <img className="helmet-blog-img"src="./assets/helmet-imgblog.png" alt="blog-img" />
        <h2 className='helmet-head'>Helmet Safety Ratings & Standards: A Comprehens...</h2>
        <p className='helmet-para'>Helmets are a crucial piece of safety equipment designed to protect the head from injuries during various activities, such as cycling, motorcycling, sports, construction work, and more. While they might seem like simple protective gear, helmets are meticulously engineered to absorb impact and reduce the risk of serious head injuries. <strong className='readmore-blog'>Readmore</strong></p>
        </div>
        <div className='bikemaintain-blog'>
          <img className="bikemaintain-blog-img"src="./assets/bikemaintain-imgblog.png" alt="blog-img" />
          <h2 className='bikemaintain-head'>Maintain Your Motorcycle for Optimal Performance</h2>
          <p className="bikemaintain-para">Owning a motorcycle is a thrilling experience, offering the freedom to explore the open road. However, to enjoy a smooth, safe ride, regular maintenance is essential. Proper motorcycle maintenance not only improves its performance but also increases its lifespan, reduces repair costs, and ensures your safety.<strong className='readmore-blog'>Readmore</strong></p>
          </div>
       </div>
      
    </div>
  )
}

export default Blog
