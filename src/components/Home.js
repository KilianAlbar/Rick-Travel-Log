import React from 'react'
import '../css/home.css'
import ricksTravel from '../assets/rickstravel.png'

const BodyHome = () => {
    return (
        <div className="containerHolder">
            <div className="containerTitle">
                <img src={ricksTravel} alt="Rick's Travel Logs"/>
            </div> 
            <div className="containerResume">
                <p>
                    Anim exercitation aliqua irure et consequat mollit Lorem non velit nulla elit ullamco veniam. Qui mollit proident deserunt incididunt veniam id pariatur ea in duis reprehenderit commodo laboris reprehenderit. Ex voluptate culpa occaecat nulla voluptate occaecat irure. Anim veniam pariatur aliquip proident veniam ea reprehenderit officia incididunt veniam mollit aliqua id.Laboris pariatur et ipsum aliqua.
                </p>
            </div>
        </div>
    )
}

export default BodyHome