import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBox({updateval}){
    
    let[city,setcity]=useState("");
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY=import.meta.env.API_KEY;
    let weather=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonres=await response.json();
        
        let result={
            city:city,
            temp:jsonres.main.temp,
            minTemp:jsonres.main.temp_min,
            maxTemp:jsonres.main.temp_max,
            feelsLike:jsonres.main.feels_like,
            description:jsonres.weather[0].description,
            humidity:jsonres.main.humidity
        }
        console.log(result);
        return result;

    }
    let handlechange=(event)=>{
        setcity(event.target.value);
    }
    let handlesubmit=async (e)=>{
        e.preventDefault();
        console.log(city);
        setcity("");
        let info=await weather();
        
        updateval(info);
        
        
    }
    return(
    <form onSubmit={handlesubmit}>
         <TextField id="search" label="City Name" variant="outlined" required value={city} onChange={handlechange} /><br/><br/>
         <Button variant="contained" type="submit" >Send</Button>
    </form>)
}