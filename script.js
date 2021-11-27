const search = document.querySelector('.searching');
const btn = document.querySelector('.btn');
const place = document.querySelector('.heading');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const cloud = document.querySelector('.cloud');
const humidity = document.querySelector('.hum');
const wind = document.querySelector('.wind');
const body = document.body;
const weather = document.querySelector('.weather');

const apiKey = "f518846b7e9d25426cc5677577d0ee55";


const displayWeather = (data)=>{

    const { name } = data;
    const {humidity, temp} = data.main;
    const {icon, description} = data.weather[0];
    const { speed } = data.wind;


    place.innerText = `Weather in ${name}`;
    temp.innerText = ` ${temp}`;
    humidity.innerText = `${humidity}`;
    wind.innerText = ` Wind: ${speed}`;
    icon.src =  `https://openweathermap.org/img/wn/${icon}.png`;
    cloud.innerText = `${description}`;
    body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
    weather.classList.remove('loading');

};



const fetchWeather = async(city)=>{

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    displayWeather(data);


};


search.addEventListener('keyup', e=>{

    if(e.key==='Enter'){

            fetchWeather(search.value.toLowerCase().trim());
            search.value = "";

    }

});


btn.addEventListener('click', ()=>{

    fetchWeather(search.value.trim());


})
