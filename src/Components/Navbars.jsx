import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import "./Navbar.css"
const Navbars = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <nav style={{color:"purple",fontWeight:"bold"}}>
        <div className="nav">
        <ul className={`nav-menu ${menuVisible ? 'active' : ''}`}>
            <li>
              <a>
                {" "}
                  <SocialIcon
                    url="https://www.facebook.com/profile.php?id=100054025081050"
                    style={{ height: 30, width: 30 }}
                  />{" "}
                  <span style={{ marginLeft: "1rem", color: "purple" }}>
                    FACEBOOK
                  </span>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/batmanshivams">
                {" "}
  
                  <SocialIcon
                    url="https://www.instagram.com/batmanshivams/"
                    style={{ height: 30, width: 30 }}
                  />{" "}
                  <span style={{ marginLeft: "1rem", color: "purple" }}>
                    INSTAGRAM
                  </span>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/shivam-upadhyay-28b303213/">
                <SocialIcon
                  url="https://www.linkedin.com/in/shivam-upadhyay-28b303213/"
                  style={{ height: 30, width: 30 }}
                />{" "}
                <span style={{ marginLeft: "1rem", color: "purple" }}>
                LINKEDIN
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Tracerrrrrrr/">
                <SocialIcon
                  url="https://github.com/Tracerrrrrrr/"
                  style={{ height: 30, width: 30 }}
                />
                <span style={{ marginLeft: "1rem", color: "purple" }}>
                GITHUB
                </span>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/serytg/">
                <SocialIcon
                  url="https://leetcode.com/serytg/"
                  style={{ height: 30, width: 30 }}
                />
                <span style={{ marginLeft: "1rem", color: "purple" }}>
            LEETCODE
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/profile/shivamuoadhyay4">
                <SocialIcon
                  url="https://www.hackerrank.com/profile/shivamuoadhyay4"
                  style={{ height: 30, width: 30 }}
                />{" "}
                <span style={{ marginLeft: "1rem", color: "purple" }}>
             HACKERRANK
                </span>
              </a>
            </li>
          </ul>
          {/* Render the button only when the menu is not visible on smaller screens */}
        {!menuVisible ?(
          <button className="toggle-btn" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        ):  <button className="toggle-btn" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

      </button>}
        </div>
      </nav>
    </>
  );
};

export default Navbars;

