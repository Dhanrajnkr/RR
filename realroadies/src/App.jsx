import React from 'react'
import Navbar from './Components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Features from './Pages/Features'
import Store from './Pages/Store/Store'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact'
import Ibw from './Pages/Blog/Ibw/Ibw'
import ListBikesAdd from './Pages/Store/Bike/ListYourBike/ListBikesAdd'
import ListBikeDataEnter from './Pages/Store/Bike/ListYourBike/ListBikeDataEnter'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/ibw" element={<Ibw />} />
        <Route path="/listbikesadd" element={<ListBikesAdd/>}/>
        <Route path="/listbikedataenter" element={<ListBikeDataEnter/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

