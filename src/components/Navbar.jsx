import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className = 'navbar-parent'> 
        <Link to="/">
            <button className="navbtn header">Local Notes</button>
            </Link>
        <Link to = "/"> 
            <button className="navbtn">Home</button>
        </Link>
        <Link to = "/About">
            <button className="navbtn">About dev</button>
            </Link>
            </div>
    )
}

export default Navbar
