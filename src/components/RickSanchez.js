import React from 'react'
import '../css/rickSanchez.css'

const RickAnim = (props) => {
    return (
        <div className={props.rickAnimation}>
            <img src={props.rickImage} alt="picture of Rick Sanchez" />
            <div>
                <img src={props.rickTextArea} alt="text area for Rick" />
                <p>{props.rickSay}</p>
            </div>
        </div>
    )
}