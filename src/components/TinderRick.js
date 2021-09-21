import React, { useEffect, useState } from 'react'

/* Library */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Icons */
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* Style */
import '../css/tinderRick.css'

/* Assets */
import tindeRicks from '../assets/tinderick.png'

let TinderRick = (props) => {

    const [purpose, setPurpose] = useState(null)

    let getPurpose = () => {
        let randomCharacter = Math.floor(Math.random() * 671);

        fetch("https://rickandmortyapi.com/api/character/"+randomCharacter)
        .then((resp)=>resp.json())
        .then((data)=>setPurpose(data));
    }

    useEffect(() => {
            let randomCharacter = Math.floor(Math.random() * 671);
    
            fetch("https://rickandmortyapi.com/api/character/"+randomCharacter)
            .then((resp)=>resp.json())
            .then(data => {
                return data.name.length >= 25 ? getPurpose() : setPurpose(data)
            });
    }, []);

    return (
            <div>
            <div className="interfaceTinder">
                <div className="holderTinder">
                    <div className="headerTinder">
                        <div className="icon"><FontAwesomeIcon icon={faCog} /></div>
                        <div className="imgApp"><img className="imgTinder" src={tindeRicks}/></div>
                        <div className="icon"><FontAwesomeIcon icon={faComments} /></div>
                    </div>
                    <div className="profilTinder">
                        <div className="imgProfilHolder">
                            { purpose != null &&
                            <img id="" className="imgProfil" src= {purpose.image}/>
                            }
                        </div>
                        <div>
                            { purpose != null &&
                            <div className="resumeProfil">
                                <div>
                                    <h3>{purpose.name},</h3>
                                </div>     
                                    <p className="gender">{purpose.gender}</p>
                            </div>
                            }
                        </div>
                        <div className="resumeProfil">
                            { purpose != null &&
                            <p>{purpose.species}</p>
                            }
                        </div>
                    </div>
                    <div className="footerTinder">
                        <div className="iconRedo" onClick={() => getPurpose()} ><FontAwesomeIcon icon={faRedo} /></div>
                        <div className="iconTimes"><FontAwesomeIcon icon={faTimes} /></div>
                        <div className="iconHeart"><FontAwesomeIcon icon={faHeart} /></div>
                        <div className="iconStar"><FontAwesomeIcon icon={faStar} /></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TinderRick