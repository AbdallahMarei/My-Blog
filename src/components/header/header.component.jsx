import React from 'react'
import { Link } from 'react-router-dom'
import "./header.styles.css"

const Header = ({isLoggedIn,signInAndSignOut}) => {
    return (
            <nav className="navbar">
                <Link to="/" className="logo">
                    My Blog
                </Link>
                <div className="options">
                <Link className="option" to="/">
                    Home
                </Link>
                <a href="#about-section" className="option" >
                    About
                </a>
                {
                    isLoggedIn ? <div className="option" onClick={signInAndSignOut}>Sign Out</div> :  <Link className="option" to="/signin">
                    Sign In
                </Link>
                }
                </div>
            </nav>
    )
}

export default Header
