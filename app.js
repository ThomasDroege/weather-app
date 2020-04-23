const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2688fe4816b5c5768f1a5b371017bab2&query=Dortmund&units=m'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature, "degrees out. It feels like "+ response.body.current.feelslike+ " degree out.")
})