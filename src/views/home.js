import React from "react";
import Typed from "react-typed";
import Navbar from "../component/navbar";
import imges from "../assets/images/cycy.png";
import './home.css';
import AboutUs from "../component/about";

const Home=()=>{
    return(
        <>
         <Navbar/>
      <div className="home-container">
        <div className="sub-home">
          {/*      
<div className='row'> */}

          <div className="sub-text">
            <h3 className="margin-top-15 hi">
              Hello, my name is <span className="names">Kayitare Cynthia</span>
            </h3>
            <h3 className="professional">
              I'm a
              <span className="typing">
                <Typed
                  strings={[
                    " Full-Stack Developer ",
                    " Computer Repair ",
                    " UI/UX Designer ",
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop
                />
              </span>
            </h3>
            <p className="professional-text">
              I'm a Full-Stack Software Developer. I can make a UI/UX Design, Front-End and Backend with Javascript and Python
            </p>
            <div className="btn-center">
              <a href="#" className="margin-top-30 resume">
                Let's work together!
              </a>
            </div>
          </div>
          <div className="sub-image">
            <div className="position-image">
              <img src={imges} className="image" />
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#ff006639"
                  d="M47,-75.1C59.3,-65.2,66.8,-49.5,70.2,-34.3C73.6,-19.1,73,-4.4,68.2,7.8C63.3,20,54.2,29.5,46.6,42.9C39,56.3,32.8,73.5,22.9,75.3C12.9,77,-0.8,63.3,-11.9,53.9C-22.9,44.5,-31.3,39.4,-44.3,33.4C-57.3,27.3,-74.9,20.3,-83.3,7.7C-91.7,-4.8,-90.9,-23,-80.7,-33.4C-70.5,-43.7,-51,-46.3,-36,-55.1C-21,-63.8,-10.5,-78.6,3.4,-83.9C17.3,-89.2,34.6,-85,47,-75.1Z"
                  transform="translate(100 100)"
                />
              </svg>
              {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path className='bg-color' fill="#dc548c" d="M45,-34.3C54.6,-23.9,56.1,-5.4,50.9,9.3C45.8,24,33.9,34.9,18.1,45.6C2.3,56.3,-17.5,66.8,-36.2,62.6C-55,58.4,-72.7,39.5,-78.6,17C-84.5,-5.5,-78.6,-31.7,-63.5,-43.4C-48.4,-55.1,-24.2,-52.2,-3.2,-49.6C17.7,-47,35.4,-44.7,45,-34.3Z" transform="translate(100 100)" />
  
</svg> */}
            </div>

            {/* <div className='image-container'>
<img src={imges} className='image'/>
  </div> */}
          </div>
          <div className="icons-links">
            <ul className="ul-links">
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* </div> */}
      </div>
     <AboutUs/>
        </>
    )
}
export default Home;