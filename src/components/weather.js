import React, { useEffect, useState } from 'react';
import '../App.css'

function Weather() {

    const newCity = 'Toronto'

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [today, setToday] = useState([])
    const [forecast, setForecast] = useState([]);

    function displayWeather(oneDay, fiveDay){
        console.log('displaying weather', oneDay)

        let obj = {
            temp : Math.round(Number(oneDay[0].main.temp_max)-273.15),
            weather : oneDay[0].weather[0].description,
            icon : oneDay[0].weather[0].icon
        }

        setToday( obj )

        fiveDay.forEach( 
            e => {
                let tempK = Number(e.main.temp_max);
                let tempC = tempK - 273.15

                let obj = {
                    temp : Math.round(tempC),
                    weather : e.weather[0].description,
                    icon : e.weather[0].icon
                }
                
                setForecast(forecast => ([...forecast, obj]));
                console.log('day', forecast);
            }
           )
    }

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Toronto&appid=748ff1a0b719ff81bb15bda076c9541d`)
          .then(res => res.json())
          .then(
            (result) => {
                console.log('result', result.list)
              setIsLoaded(true);
                
              const oneDay = [ result.list[0] ];
              const fiveDay = [ result.list[1], result.list[2], result.list[3], result.list[4], ]
              
              console.log('five day', fiveDay)

              displayWeather(oneDay, fiveDay);
            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div id="weatherBar">
                    weather
                    <div class='row'>
                        <div class='col-2 weatherCell'>
                            <img src={"http://openweathermap.org/img/w/02d.png"} ></img>
                            <p>{today.temp}°C</p>
                            <p>{today.weather}</p>
                        </div>
                        {forecast.map(
                            e => (
                                <div class='col-2 weatherCell'>
                                        <p>{e.temp}</p>
                                        <img src={`http://openweathermap.org/img/w/${e.icon}.png`} ></img>
                                </div>
                            )
                        )}
                        
                    </div>
                {/* //    {forecast.map(
                //         e => (
                //             <div class='row'>
                //                 <div class='col'> weatherCell
                //                     <p>{e.temp}</p>
                //                 </div>
                //                 <div class='col'> weatherCell
                //                     <p>{e.weather}</p>
                //                 </div>
                //                 <div class='col'> weatherCell
                                    
                //                 </div>
                //             </div>
                //         )
                //    )} */}
            </div>
        )
      }
    



    
}

export default Weather;