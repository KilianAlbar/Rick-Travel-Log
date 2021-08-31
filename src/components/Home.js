import '../css/home.css'
import ricksTravel from '../assets/rickstravel.png'
import React, { useState } from 'react';
import netflixLogo from '../assets/netflix.png'
import closeButton from '../assets/close-button.png'

const BodyHome = () => {

    let [episode, setEpisode] = useState(null);

    let getEpisode = () => {

        let randomEpisode = Math.floor(Math.random() * 41);

        fetch("https://rickandmortyapi.com/api/episode/"+randomEpisode)
        .then((resp)=>resp.json())
        .then((data)=>setEpisode(data));
        
    }   

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
             <div className='buttonRandom' onClick={ () => getEpisode() }>Get new aventure</div>
             {
                 episode != null &&
                 <div className="holderInterface">
                     <div className="interfaceEpisode">
                        <div className="holderHeader">
                            <div className="holderInfos">
                                <h2 className="nameEpisode">{episode.name}</h2>
                                <p className="dateEpisode">{episode.air_date}</p>
                            </div>

                            <div>
                                <div className="closeButton" onClick={ () => setEpisode(null)}><img src={closeButton}/></div>
                            </div>
                        </div>
                        <p className="resumeEpisode">Sint non dolore cupidatat elit ea reprehenderit ea ea do quis est. Veniam qui non laborum nulla. Est consectetur ut laborum tempor. Occaecat minim proident Lorem proident nulla incididunt ullamco dolor commodo deserunt in elit deserunt. Magna non anim dolor est laborum sit consequat labore sunt est esse in id sunt. Ipsum Lorem pariatur minim sunt magna mollit.

Amet ullamco exercitation proident Lorem est proident. Eu do nostrud labore pariatur eiusmod nostrud tempor irure anim aute consectetur. Exercitation commodo laboris mollit sit dolor sint non commodo. Ullamco culpa officia enim officia esse. Aliquip nulla ut officia veniam sunt elit sunt cupidatat velit amet sit dolor do. Ullamco elit proident incididunt ut commodo aliquip commodo reprehenderit proident enim sint labore et.</p>
                        <div className="holderButtons">
                            <div className="redirectionButton"><p className="resumeEpisode">Watch on</p> <img className="redirectionImage" src={netflixLogo}/></div>
                            <div className="refreshButton" onClick={ () => getEpisode() }>Refresh</div>
                        </div>

                     </div>                   
                 </div>
                     
             }

        </div>
    )
}

export default BodyHome