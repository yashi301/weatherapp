import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";
import "./style.css"
export default function Weather(){
    let[weather,setweather]=useState({
        city:"delhi",
        temp:33.05,
        minTemp:33.05,
        maxTemp:33.05,
        humidity:75,
        feelsLike:40.05,
        description:"haze",
    })
    let updateval=(result)=>{
        
        setweather(result);
    }
    return(
    <div className="weather weather-b">
        <h1 className="roboto-medium">Weather App</h1>
    <SearchBox updateval={updateval} /><br/>
    <InfoBox info={weather}/>
    </div>
    )
}