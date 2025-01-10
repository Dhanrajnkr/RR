import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Store.css'

const Store = () => {
  const [showButtons, setShowButtons] = useState(true);
  const navigate = useNavigate();

  const handleBikeClick = () => {
    setShowButtons(true);
  }

  const handleAccessoriesClick = () => {
    setShowButtons(false);
  }
  const handleBuyClick = () => {
    navigate('/buybikes');
  }
  const handleSellClick = () => {
    navigate('/listbikesadd');
  }

  return (
    <div className='store-container'>
        {/* <img className="store-img" src="./assets/store-img.png" alt="" /> */}
            <div className='select-area'>
                <h1><a onClick={handleBikeClick} style={{cursor: 'pointer', color: showButtons ? '#FFDD00' : 'inherit'}}>Bike</a></h1>
                <h1><a onClick={handleAccessoriesClick} style={{cursor: 'pointer', color: !showButtons ? '#FFDD00' : 'inherit'}}>Accessories</a></h1>
            </div>
            {showButtons && (
               <div className='store-bikebtn-area' >
                  <button className='buy-btn'onClick={handleBuyClick}>
                    <img className="buy-btn-img"src="./assets/buy-bike-img.png" alt="buy" />
                   <a> BUY</a><br/><span style={{color:"#ffffff"}}>Used bikes for sale</span>
                  </button>
                  <button className='rent-btn'>
                    <img className="rent-btn-img"src="./assets/rent-bike-img.png" alt="rent" />
                    <a>RENT</a><br/><span style={{color:"#ffffff"}}>Bikes avilable for rent</span>
                  </button>
                  <button className='sell-btn' onClick={handleSellClick} >
                    <img className="rent-btn-img"src="./assets/sell-bike-img.png" alt="sell" />
                    <a>List your bike</a><br/><span style={{color:"#ffffff"}}>Post your ad here</span>
                  </button>
              </div>
            )}
                 
                  
            {!showButtons && (
              <div className='store-accssoriesbtn-area'>
                 <button className='acc-buy-btn'>
                  <img className="buy-btn-img"src="./assets/buy-bike-img.png" alt="buy" />
                  <a>BUY</a><br/><span style={{color:"#ffffff"}}>New/Used riding gear <br/>& more</span>
                </button>
                  <button className='acc-rent-btn'>
                    <img className="rent-btn-img"src="./assets/rent-bike-img.png" alt="rent" />
                    <a>RENT</a><br/><span style={{color:"#ffffff"}}>Accessories & more for<br/> rent</span>
                  </button>
                  <button className='acc-sell-btn'>
                    <img className="rent-btn-img"src="./assets/sell-bike-img.png" alt="sell" />
                    <a>List your accessories </a><br/><span style={{color:"#ffffff"}}>Post item for sale/rent</span>
                  </button>
              </div>
            )}
    </div>
  )
}

export default Store

