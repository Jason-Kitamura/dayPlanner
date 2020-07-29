import React, { useEffect, useState } from 'react';
import '../App.css'

//weather icons

import clear_sky_day from '../assets/clear_sky_day.png';
import broken_clouds_day from '../assets/broken_clouds_day.png'
import few_clouds_day from '../assets/few_clouds_day.png'
import mist_day from '../assets/mist_day.png'
import rain_day from '../assets/rain_day.png'
import shower_rain_day from '../assets/shower_rain_day.png'
import snow_day from '../assets/snow_day.png'
import thunderstorm_day from '../assets/thunderstorm_day.png'

import clear_sky_night from '../assets/clear_sky_night.png';
import broken_clouds_night from '../assets/broken_clouds_night.png'
import few_clouds_night from '../assets/few_clouds_night.png'
import scattered_clouds_night from '../assets/scattered_clouds_night.png'
// import mist_night from '../assets/mist_night.png'
import rain_night from '../assets/rain_night.png'
import shower_rain_night from '../assets/shower_rain_night.png'
import snow_night from '../assets/snow_night.png'
import thunderstorm_night from '../assets/thunderstorm_night.png'

// import clearDay from '../assets/day1.png'

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

            console.log('display icon', displayIcon(oneDay[0].weather[0].icon))

        let obj = {
            temp : Math.round(Number(oneDay[0].main.temp_max)-273.15),
            weather : oneDay[0].weather[0].description,
            icon : displayIcon(oneDay[0].weather[0].icon),
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
                    icon : displayIcon(e.weather[0].icon),
                    day : days[day]
                }
                
                setForecast(forecast => ([...forecast, obj]));
                console.log('day', forecast);
            }
           )
    }

    //function to display icon
    function displayIcon( icon ){
        //day
        if( icon === '01d' ) {
            return clear_sky_day;
        } else if ( icon === '02d') {
            return few_clouds_day;
        } else if ( icon === '03d') {
            return scattered_clouds_night;
        } else if ( icon === '04d') {
            return broken_clouds_day;
        } else if ( icon === '09d') {
            return shower_rain_day;
        } else if ( icon === '10d') {
            return rain_day;
        } else if ( icon === '11d') {
            return thunderstorm_day;
        } else if ( icon === '13d') {
            return snow_day;
        } else if ( icon === '50d') {
            return mist_day;
            //night
        } else if( icon === '01n' ) {
            return clear_sky_night;
        } else if ( icon === '02n') {
            return few_clouds_night;
        } else if ( icon === '03n') {
            return scattered_clouds_night;
        } else if ( icon === '04n') {
            return broken_clouds_night;
        } else if ( icon === '09n') {
            return shower_rain_night;
        } else if ( icon === '10n') {
            return rain_night;
        } else if ( icon === '11n') {
            return thunderstorm_night;
        } else if ( icon === '13n') {
            return snow_night;
        } else if ( icon === '50n') {
            return mist_day;
        }
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
                        <div class='col-md-6 todayCell'>
                        <h1 id='todayCity'>Toronto</h1>

                            <div class='row'>

                                <div class='col-6'>
                                    <img  src={today.icon} ></img>
                                </div>
                                <div class='col-6' id='todayInfo'>
                                    <p id='todayDay'>{today.day}</p>
                                    <p id='todayTemp'>{today.temp}°</p>
                                    <p id='todayDescription'>{today.weather}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class='col-md-6'>
                            <div class='row' id='forecastCells'>
                            
                                    {forecast.map(
                                        e => (
                                            <div class='col-2 weatherCell'>
                                                <p>{e.day}</p>
                                                <div class='weatherIcon'>
                                                    <img src={e.icon} ></img>
                                                </div>
                                                <p>{e.temp}°</p>
                                            </div>
                                        )
                                    )}
                            
                            </div>
                        </div>
                    </div>
            </div>
        )
      }
    



    
}

export default Weather;