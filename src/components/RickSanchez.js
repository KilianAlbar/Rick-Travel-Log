import React from 'react'
import '../css/rickSanchez.css'

const RickAnim = (props) => {
    return (
        <div className={props.rickAnimation}>
            <img className="rickFromLeftScreen" src={props.rickImage} alt="picture of Rick Sanchez" />
            <div>
                <img className="textArea" src={props.rickTextArea} alt="text area for Rick" />
                <p className="textSay">{props.rickSay}</p>
            </div>
        </div>
    )
}

export default RickAnim