import { useEffect, useState } from "react";
import { PlanetsData } from "../datas/PlanetsData";

function PlanetDetails(props){

    // let id = props.match.params.id;

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location/1")
            .then((resp) => resp.json())
            .then((data) => setDetails(data));
    }, []);

    function getLandscapeImg(){

        const planetDetails = details.id;
        let landscape = <img src={PlanetsData[0].landscapeImg}/>;

        switch(planetDetails){
            case 1 :
                return landscape;
            break;

            case 8 :
                return landscape;
            break;

            case 9 :
                return landscape;
            break;

            case 10 :
                return landscape;
            break;

            case 11 :
                return landscape;
            break;

            case 12 :
                return landscape;
            break;

            case 13 :
            return landscape;
            break;
        }

        if (details.id == 8){
            return <img src={PlanetsData[0].landscapeImg}/>
        }else{
            return <p>y'a rien</p>
        }
    }

    return (
        <div>
            {
                details != null &&
                <div>
                    <h1>{details.name}</h1>
                    {getLandscapeImg()}
                </div>
            }
        </div>
    )
 

}

export default PlanetDetails

