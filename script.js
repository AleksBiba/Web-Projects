const apiKey = "c84f48d050357cab15d4df9622add7e9";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed} m/s`;
            
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "img/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "img/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "img/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "img/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "img/mist.png";
            }
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

        checkWeather();