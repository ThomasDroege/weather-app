const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=2688fe4816b5c5768f1a5b371017bab2&query=' +  encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '&units=m'
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(response.body.error){
            callback('Unable to find location. Try another search.', undefined)
        } else{
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like "+ response.body.current.feelslike+ " degree out.")
        }
    })
}

module.exports = forecast