const apiKey = '0c774af9b9da0352f7e3ed2fa9c1761f'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

let checkWeather = async (city) => {
    const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`)
    
    if(response.status == 404)
        console.log('Invalid City Name');

    
    const data = await response.json();

    document.getElementById('city-name').innerHTML = data.name
    document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + '°c'
    document.getElementById('humidity').innerHTML = data.main.humidity + '%'
    document.getElementById('wind').innerHTML = data.wind.speed + 'km/h'
    document.getElementById('pressure').innerHTML = data.main.pressure + 'Pa'


    const weatherIcn = document.querySelector('#weather-icon > img')

    

    
    if(data.weather[0].main == 'Clouds')
        weatherIcn.src = './img/weather_images/clouds.png'

    else if(data.weather[0].main == 'Clear')
        weatherIcn.src = './img/weather_images/clear.png'
    
    else if(data.weather[0].main == 'Rain')
        weatherIcn.src = './img/weather_images/rain.png'
    
    else if(data.weather[0].main == 'Drizzle')
        weatherIcn.src = './img/weather_images/drizzle.png'
    
    else if(data.weather[0].main == 'Mist')
        weatherIcn.src = './img/weather_images/mist.png'

    else if(data.weather[0].main == 'Snow')
        weatherIcn.src = './img/weather_images/snow.png'

    console.log(data)
}


const input = document.querySelector('.search > input')
const searchBtn = document.querySelector('.search > i')

input.addEventListener('keyup', (e) => {
    if(e.key == 'Enter') {
        if(input.value)
            checkWeather(input.value)

        else
            alert('Please Enter a City Name')

    }

})
searchBtn.addEventListener('click', () => {
    if(!input.value) {
        alert('Please Enter a City Name')
    }
    else
        checkWeather(input.value)
})