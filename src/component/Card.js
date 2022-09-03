import React, { useState } from "react";
import { useEffect } from "react";
import loanding from "../imgs/loanding.gif";

const Card = ({
  city,
  country,
  windSpeed,
  clouds,
  pressure,
  temperatureCelsion,
  humidity,
  icon,
  Temperaturefahrenheit,
}) => {
  const [isLoanding, setIsLoanding] = useState(false);
  const [degreeType, setDegreeType] = useState(false);
  const changeGradeType = () => {
    setDegreeType(!degreeType);

  
  };
  useEffect(() => {
    setIsLoanding(true);
    setTimeout(()=>{
        setIsLoanding(false);
    },3000)
  }, []);

 

  return (
    <div className="Card">
      <p className="title-app">weather app</p>
      {isLoanding ? (
        <img src={loanding} alt="" />
      ) : (
        <div>
          <p className="country">
            {city} {country}
          </p>
          <img src={icon} alt="" />
          <p className="temperature">
            {!degreeType ? Temperaturefahrenheit : temperatureCelsion}
          </p>
          <div className="container">
            <p className="elementOne">
              wind Speed: <br />
              <strong> {windSpeed} </strong>
            </p>
            <p className="elementTwo">
              {" "}
              clouds:
              <br /> <strong> {clouds} </strong>
            </p>
            <p className="elementThree">
              Pressure: <br />
              <strong>{pressure}</strong>
            </p>
            <p className="elementFour">
              Humidity:
              <br /> <strong>{humidity}</strong>
            </p>

            <button className="elementFive" onClick={changeGradeType}>
              {degreeType ? "Fahrenheit" : "Centigrade"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
