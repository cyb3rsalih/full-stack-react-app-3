const request = require('request-promise')


const API_KEY = "38fa98066476319c18732d338e6d6cd0"

class Weather {
    static retrieveByCity(city,callback){
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric&lang=tr`,
            json: true,
        }).then(function(res){
            callback(res)
        }).catch(function (err){
            console.log(err)
            callback({error: 'Could not reach OpenWeatherMap API.'})
        })
    }
}

module.exports = Weather