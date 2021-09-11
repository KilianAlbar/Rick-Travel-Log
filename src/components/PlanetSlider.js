import { useEffect, useState } from "react";
import Slider from "react-slick";
import { PlanetsData } from "../datas/PlanetsData";



function PlanetSlider(){


    const [imageIndex, setImageIndex] = useState(0)
    const [rickLocations, setRickLocations] = useState(null) 
    
    useEffect(() => {

        let arrayLocations =[];
    
        for(let i = 0; i < PlanetsData.length; i++){
            fetch("https://rickandmortyapi.com/api/location/"+PlanetsData[i].id)
            .then((resp) => resp.json())
            .then((data) => {let tempObject = 
                {
                    id: data.id,
                    planetImg : PlanetsData[i].planetImg,
                    name: data.name,
                    residents: data.residents,
                    url: data.url,
                    landscapeImg: PlanetsData[i].landscapeImg

                };

                arrayLocations.push(tempObject);

                if(arrayLocations.length === PlanetsData.length){
                    setRickLocations(arrayLocations);
                }
            })
        }

    },[])

    const settings ={
        infinite:true,
        lazyLoad:true,
        speed:100,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return(
        <div className="planetSlide">
            <Slider {...settings}> 
                {
                    rickLocations != null &&
                        rickLocations.map((img, index) =>{
                            return (
                                <div className={index === imageIndex ? "activeSlide" : "otherSlide"}>
                                    <img onClick={() => console.log(img.url)} src={img.planetImg} alt={img.name}/>
                                </div>
                            )  
                })}
            </Slider>
        </div>
    )
}

export default PlanetSlider