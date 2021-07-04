import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className = 'navbar-parent'> 
        <div className="btns">
        <Link to = "/">
            <button className="navbtn">Home</button>
        </Link>
        <Link to = "/About">
            <button className="navbtn">About dev</button>
            </Link>
            </div>
        </div>
    )
}

export default Navbar
