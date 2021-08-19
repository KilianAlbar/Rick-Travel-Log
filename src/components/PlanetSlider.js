import {useState} from "react";
import Slider from "react-slick";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import planet3 from "../assets/planet3.png";
import planet4 from "../assets/planet4.png";
import planet5 from "../assets/planet5.png";
import planet6 from "../assets/planet6.png";
import planet7 from "../assets/planet7.png";

const planets = [planet1,planet2,planet3,planet4,planet5,planet6,planet7]

function PlanetSlider(){

    const NextArrow = ({onClick}) => {
        return(
            <div className="arrowNext" onCLick={onClick}>
                <span>RIGHT</span>
            </div>
        )
    }
    
    const PrevArrow = ({onClick}) => {
        return(
            <div className="arrowPrev" onCLick={onClick}>
                <span>LEFT</span>
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)



    const settings ={
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:5,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    };



    return(
        <div className="planetSlide">
        <Slider {...settings}>
            {planets.map((img, index) =>(
                <div className={index === imageIndex ? "activeSlide" : "otherSlide"}>
                    <img src={img} alt={img}/>
                </div>
            ))}
        </Slider>
        </div>
    )
}

export default PlanetSlider