import Card from '@mui/material/Card';
import "./style.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_url="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=";
    const rain_url="https://static.vecteezy.com/system/resources/thumbnails/020/568/608/small/heavy-rain-drop-at-the-road-surface-bokeh-background-photo.jpg"
    const haze_url="https://media.rnztools.nz/rnz/image/upload/s--1Lu6gxLW--/c_scale,f_auto,q_auto,w_1050/v1644211709/4N00101_copyright_image_219422";
    return(
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }}
        image={info.description==="haze"?haze_url:(info.humidity>70 || info.description==="heavy intensity rain")?rain_url:info.temp>15?hot_url:INIT_URL}
        title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {(info.humidity>70 || info.description==="heavy intensity rain")?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span" >
         <p>Temp:{info.temp}</p>
         <p>Max Temp:{info.maxTemp}</p>
         <p>Min Temp:{info.minTemp}</p>
         <p>Humidity:{info.humidity}</p>
         <p>Weather can be describe as <b>{info.description}</b> and feels like {info.feelsLike}</p>
         
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}