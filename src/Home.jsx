import React from 'react'
import "./CSS/Home.css";
import MegaMenu from './Components/Home/Menu/MegaMenu';
import Cards from './Components/Cards/Cards';
const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-menu">
        <MegaMenu/>
      </div>
      <div className="menu-slider">
        
      </div>
      <div className="home-cards">
        <Cards/>
      </div>

    </div>
    </>
  )
}
export default Home