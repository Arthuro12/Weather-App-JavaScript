import copyOfArrDayOfWeek from "./utilities/time.js";

const APIKEY = '6c93938e0526d05dcb4a912cd5e913a7';

const position =  document.querySelector('.position');
const temperature =  document.querySelector('.temperature');
const time =  document.querySelector('.time');
const hour = document.querySelectorAll('.hour-name-forecast');
const temperatureOfHour = document.querySelectorAll('.hour-temp-forecast');
const day = document.querySelectorAll('.day-name-forecast');
const temperatureOfDay = document.querySelectorAll('.day-temp-forecast');
const imgIcon = document.querySelector('.logo-icon');

let resultAPI;

//Versuch die Geolokalisierung zu erreichen vor dem Aufruf der Funktion getAPI
if(navigator.geolocation)
{
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition( position => {
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        getAPI(longitude, latitude);
        
    }, () => {
        alert("Sie sollen die Geolokalisierung annehmen wenn Sie die Anwendung weiternutzen wollen!!!");
    }
    )
}

function getAPI(longitude, latitude)
{
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&lang=de&appid=${APIKEY}`;
    fetch(url)
    .then((response) =>
    {
        //Gibt das Ergenis in JSON-Format aus
        return response.json();
    })
    .then((data) =>
    
    {
        console.log(data);
        resultAPI = data;
        //Gibt nur der Name der Stadt aus
        const strCity = resultAPI.timezone.substr(7, 12);
        position.innerText = strCity;
        temperature.innerText = `${Math.trunc(resultAPI.current.temp)}°`;
        time.innerText = resultAPI.current.weather[0].description;

        //Aktuelle Uhrzeit
        let currentHour = new Date().getHours();

        //Stunde in Intervallen von 4
        for (let i = 0; i < hour.length; i++)
        {
            let nextHour = currentHour + (i * 4);
            if (nextHour > 24)
            {
                hour[i].innerText = nextHour - 24 + " h";
            }
            else if (nextHour === 24){
                hour[i].innerText = "00 h";
            }
            else{
                hour[i].innerText = nextHour + " h";
            }
        }

        for(let i = 0; i < temperatureOfHour.length; i++)
        {
            temperatureOfHour[i].innerText = `${Math.trunc(resultAPI.hourly[i * 4].temp)}°`;
        }

        //Tage
        for(let i = 0; i < copyOfArrDayOfWeek.length; i++)
        {
            day[i].innerText = copyOfArrDayOfWeek[i].slice(0, 3);
        }

        //Temperaturen für Tage
        for(let i = 0; i < 8; i++)
        {
            temperatureOfDay[i].innerText = `${Math.trunc(resultAPI.daily[i].temp.max)}°`;
        }

        //Dynamisches Ikon
        if (currentHour >= 6 && currentHour < 21)
        {
            imgIcon.src = `sources/day/${resultAPI.current.weather[0].icon}.svg`;
        }
        else{
            imgIcon.src = `sources/night/${resultAPI.current.weather[0].icon}.svg`;
        }
    })
}