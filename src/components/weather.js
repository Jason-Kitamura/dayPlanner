import React, { useEffect, useState } from 'react';
import '../App.css'

function Weather() {

    const newCity = 'Toronto'

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [today, setToday] = useState([])
    const [forecast, setForecast] = useState([]);

    const days = [ 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const fullDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satday'];

    


    function displayWeather(oneDay, fiveDay){
        console.log('displaying weather', oneDay)

        let myDate = new Date(oneDay[0].dt_txt),
            day = myDate.getDay()
            console.log('day', day)

        let obj = {
            temp : Math.round(Number(oneDay[0].main.temp_max)-273.15),
            weather : oneDay[0].weather[0].description,
            icon : oneDay[0].weather[0].icon,
            day : fullDays[day],
        }

        setToday( obj )

        fiveDay.forEach( 
            e => {
                let tempK = Number(e.main.temp_max);
                let tempC = tempK - 273.15

                let myDate = new Date(e.dt_txt),
                    day = myDate.getDay()
                    console.log('day', day)

                let obj = {
                    temp : Math.round(tempC),
                    weather : e.weather[0].description,
                    icon : e.weather[0].icon,
                    day : days[day]
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

            //   console.log('character test', result.list[0].dt_txt.charAt(11))
            //   console.log('character test', result.list[0].dt_txt.charAt(12))
            //   const forecastArray = result.list
            //   console.log('forecastArray', typeof forecastArray)
              const fiveDay = result.list.filter(
                  day => {
                     return day.dt_txt.charAt(11) == '1' && day.dt_txt.charAt(12) == '5';
                  }
              )
            //   console.log('test forcast', testForcast)
              
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
                    
                    <div class='row'>
                        <div class='col-6 todayCell'>
                            <div class='row'>
                                <div class='col-6'>
                                    <img  src={"http://openweathermap.org/img/w/02d.png"} ></img>
                                </div>
                                <div class='col-6'>
                                    <p id='todayDay'>{today.day}</p>
                                    <p id='todayTemp'>{today.temp}°</p>
                                    <p id='todayDescription'>{today.weather}</p>
                                </div>
                            </div>
                            
                        </div>
                        {forecast.map(
                            e => (
                                <div class='col-1 weatherCell'>
                                    <p>{e.day}</p>
                                    <img src={`http://openweathermap.org/img/w/${e.icon}.png`} ></img>
                                    <p>{e.temp}°</p>
                                </div>
                            )
                        )}
                        
                    </div>
        
            </div>
        )
      }
    



    
}

export default Weather;