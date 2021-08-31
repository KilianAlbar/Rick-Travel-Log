import React, { useState } from 'react';
import '../style.css'

let TestApi = () => {

    const [testApi, setTestApi] = useState(null);

    const randomNumber = Math.floor(Math.random() * 41)

    let getRandomEpisode = () => {

        fetch('https://rickandmortyapi.com/api/episode/'+randomNumber)
        .then((resp) => resp.json())
        .then((data) => setTestApi(data));

        }

    return (
        <div className="testDiv">
            <button onClick={() => getRandomEpisode()}>Appuyer</button>

            {
                testApi != null &&
                <div>
                    <h1 className="test">{testApi.name}</h1>
                </div>
            }
        </div>
    )

}   

export default TestApi