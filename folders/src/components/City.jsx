import React from 'react'

export default function City({city}) {
    console.log(city)
    return (
      <div className="bg-blue-200 max-h-full relative">
         <div className="container">
              <h2>{city.name}</h2>
              <div className="info">
                 <div>Temperature: {city.temp} ºC</div>
                 <div>Weather: {city.weather}</div>
                 <div>Wind: {city.wind} km/h</div>
                 <div>Nubosity: {city.clouds}</div>
                 <div>Latitud: {city.latitud}º</div>
                 <div>Longitud: {city.longitud}º</div>
              </div>
         </div>
       </div>
     )
}
