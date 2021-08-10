import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="holderButton">
            <div className="button">
                <p>HOME</p>
            </div>
            <div className="button">
                <p>PLANETS</p>
            </div>
            <div className="button">
                <p>ACHIEVEMENTS</p>
            </div>
            <div className="button">
                <p>SHOP</p>
            </div>
        </div>
    )
}

export default Navbar