import React,{useState} from 'react';
import './navbar.css';
import logo from "../assets/images/logo.png";


const Navbar=()=>{
  
    const [openNav,setOpenNav]=useState(false)
    return(
        <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} className="navbar-logo__logo" />
          <h1 className="navbar-logo__text">KAYITARE ~ Cynthia</h1>
        </div>
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button" onClick={()=>{
        setOpenNav(!openNav);
        
      }}>
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>
        {/* <div className="menu-btn">
        <img src={menu} className='menu-img'/>
        </div> */}
        <div className="button-icon" ></div>
        <ul   className={
          openNav ? "navbar-links expanded" : "navbar-links"
          
        } >
           
          {/* <li><a href='#' className='navbar-link'>Home</a></li> */}
          <li>
            <a href="#about" className="navbar-link" onClick={()=>{
        setOpenNav(false);
        
      }}>
                <span>01. </span>
              About
            </a>
          </li>
        
          <li>
            <a href="#" className="navbar-link">
            <span>02. </span>
              Work
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
            <span>03. </span>
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
            <span>04. </span>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    )
}
export default Navbar;