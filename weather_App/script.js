const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const apikey = "f6f23fd913cd2783b7d231bc51f599f7";
const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function myFunction(city) {
    const x = await fetch(url(city), { origin: "cors" });
    const y = await x.json();

    addWeatherToPage(y);

}

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <p>in ${search.value}</p>
    `

    main.appendChild(weather)
}

function KtoC(K){
    return Math.floor(K - 273.15).toFixed(2)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if(city){
        myFunction(city) 
    }
})
