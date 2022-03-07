import React, { useState } from 'react';


const Card = ({city, country, windSpeed, clouds, pressure, temperatureCelsion, humidity, icon, Temperaturefahrenheit}) => {
    const[ degreeType, setDegreeType] = useState(false)
    const changeGradeType = () =>{
        setDegreeType(!degreeType)
       
    }

    return (
        <div className='Card'>
            <p>{city} {country}</p>
            <img src={icon} alt="" />
            <p className='temperature'>{!degreeType ? Temperaturefahrenheit : temperatureCelsion}</p>
            <div className='container'>
                <p className='elementOne'>wind Speed: <strong> <br /> {windSpeed} </strong></p>
                <p className='elementTwo'> clouds: <strong> <br />{clouds} </strong></p>
                <p className='elementThree'>Pressure: <strong> <br />{pressure}</strong></p>
                <p className='elementFour'>Humidity: <strong><br />{humidity}</strong></p>
                
                <button className='elementFive' onClick={ changeGradeType } > 
                    {degreeType ? "Fahrenheit" : "Centigrade"}
                </button>
            </div>
        </div>
    );
};

export default Card;