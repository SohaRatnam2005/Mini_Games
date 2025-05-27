const apiKey = "2118046f9b7b663a5a47dabb2d9165af";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericon");


async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if (response.status== 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    

  }
  else{
  var data = await response.json();
  


  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = data.main.temp + "°C";
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + " km/h";

 
  if(data.weather[0].main == "Clouds"){
    weathericon.src = " icons/weather_2-128.webp"
  }
  else if(data.weather[0].main == "Clear"){
    weathericon.src = "icons/weather_3-128.webp"
  }
  else if(data.weather[0].main == "Rain"){
    weathericon.src = "icons/weather-32-128.webp"
  }
  else if(data.weather[0].main == "Drizzle"){
    weathericon.src = " icons/drizzle.webp"
  }
  else if(data.weather[0].main == "Mist"){
    weathericon.src = "icons/mist.webp"
  }
  
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";

}
}
searchBtn.addEventListener("click" , ()=>
{
  checkWeather(searchBox.value);
})

  checkWeather();




  







