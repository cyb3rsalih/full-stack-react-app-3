const request = require('request-promise')

require('dotenv').config()

const API_KEY = '';

class Weather {
    static retrieveByCity(city,callback){
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY}&units=metric&lang=tr`,
            json: true,
        }).then((res) => {
            callback(res)
        }).catch((err) => {
            console.log(err)
            callback({error: 'Could not reach OpenWeatherMap API.'})
        })
    }
}

module.exports = Weather