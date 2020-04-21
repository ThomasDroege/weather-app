const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2688fe4816b5c5768f1a5b371017bab2&query=New%20York'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})