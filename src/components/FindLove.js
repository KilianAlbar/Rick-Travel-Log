import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../css/interfaceLovers.css'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import tindeRicks from '../assets/tinderick.png'
import MortyTest from '../assets/morty.png'

let AlienLovers = (props) => {

    const [purpose, setPurpose] = useState(null)
    const [imgStatut, setImgStatut] = useState(null)

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
            <div className="TinderAliens">
            <div className="holderImgStart"><img  className={props.anim} src={tindeRicks}/></div>
            <div className="interfaceLovers">
                <div className="holderLovers">
                    <div className="headerLovers">
                        <div className="icon"><FontAwesomeIcon icon={faCog} /></div>
                        <div className="imgHolder"><img className="imgLovers" src={tindeRicks}/></div>
                        <div className="icon"><FontAwesomeIcon icon={faComments} /></div>
                    </div>
                    <div className="profilLovers">
                        <div className="imgProfilHolder">
                            { purpose != null &&
                            <img id="" className="imgProfil" src= {purpose.image}/>
                            }
                        </div>
                        <div>
                            { purpose != null &&
                            <div className="rowProfil">
                                <div>
                                    <h3>{purpose.name},</h3>
                                </div>     
                                    <p className="gender">{purpose.gender}</p>
                            </div>
                            }
                        </div>
                        <div className="rowProfil">
                            { purpose != null &&
                            <p>{purpose.species}</p>
                            }
                        </div>
                    </div>
                    <div className="footerLovers">
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

export default AlienLovers