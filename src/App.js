import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './component/Card';



function App() {
  const [location, setLocation] = useState({});
  const success = pos => {

  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e0d603689a0dfadcb453425530e93f85`).then(res =>  setLocation(res.data)) ;
}
  
    
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success);
  },[])
 
 //const temperatureValue = 
 const temperatureCelsius = (Math.round( (location.main?.temp) - 273.15 ));
 const Temperaturefahrenheit = (Math.round( ((temperatureCelsius) *  (9/5)) + 32 ) ); 
   return (
    <div className="App">
      
      <Card city={location.name}
            icon={` http://openweathermap.org/img/wn/${location.weather?.[0].icon}@2x.png`}
            country={location.sys?.country}
            windSpeed={location.wind?.speed}
            clouds={location.clouds?.all}
            pressure={location.main?.pressure}
            temperatureCelsion={`${temperatureCelsius} °C`}
            humidity={location.main?.humidity}
            Temperaturefahrenheit={`${Temperaturefahrenheit} °F`}/> 
    
    </div>
  );
}

export default App;
