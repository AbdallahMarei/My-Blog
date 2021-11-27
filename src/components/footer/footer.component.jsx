import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.styles.css"

const Footer = () => {
    return (
        <footer>
              <div className="navbar-links-footer">
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><a href="#about-section">About</a></li>
           </ul>
        </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/abdallah-marei/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
           <a href="https://github.com/AbdallahMarei" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
           <a href="https://www.facebook.com/abdullah.mari" rel="noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
        </div>
        <p>&copy Copyright 2021. Made by Abdallah Marei</p>
        </footer>
    )
}

export default Footer
