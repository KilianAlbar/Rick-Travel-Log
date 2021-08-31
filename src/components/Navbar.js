import React, { useEffect, useState } from 'react'
import '../css/navbar.css'

const Navbar = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize () {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })

    }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (<>
        { dimensions.width > 1000 &&
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
    } 
    { dimensions.width <= 1000 &&
        <label for="check">
            <input type="checkbox" id="check"/> 
            <span></span>
            <span></span>
            <span></span>
        </label>
    }
    </>)


}

export default Navbar