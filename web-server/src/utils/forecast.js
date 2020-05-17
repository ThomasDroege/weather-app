const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=2688fe4816b5c5768f1a5b371017bab2&query=' +  encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '&units=m'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search.', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature +
             "°C out. It feels like "+ body.current.feelslike + " degree out. The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast