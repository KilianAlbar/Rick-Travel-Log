import React from 'react'
import '../css/rickSanchez.css'

const RickAnim = (props) => {

    let windowSize = window.innerWidth;

    if(windowSize > 480) {
        return (
            <div className={props.rickAnimation}>
                <img className="rickFromLeftScreen" src={props.rickImage} alt="picture of Rick Sanchez" />
                <div>
                    <img className="textArea" src={props.rickTextArea} alt="text area for Rick" />
                    <p className="textSay">{props.rickSay}</p>
                </div>
            </div>
        )
    } else if (windowSize <= 480) {
        return null
    }


}

export default RickAnim