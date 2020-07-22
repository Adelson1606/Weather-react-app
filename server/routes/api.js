const express = require('express')
const router = express.Router()
const request = require('axios')
const City = require('../modules/CitySchema')
const apiKey = 'eCfZXof0PbWdwrC4IQdk9c1Nfllk3v7S'
// const apiKey = 'BXSOf9TZQYQZGKiSLhRpcLT8aofdFGrY'

function apireq(city) {
  return request(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`)
}

router.get('/city/:cityName', async function (req, res) {
  const city = req.params.cityName
  const name = city.charAt(0).toUpperCase() + city.slice(1)
  const data = await apireq(name)
    .catch(function (err) {
      console.error(err)
    })
  if (!data) {
    res.status(404).end()
    return
  }
  const cityKey = data.data[0].Key
  const tempData = await request(` http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`)
    .catch(function (err) {
      console.error(err)
    })

  if (!data) {
    res.status(404).end()
    return
  }
  const weather = tempData.data[0]

  const tempDataFiveDays = await request(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`)
  const tempFiveDays = tempDataFiveDays.data.DailyForecasts
  const fiveDaysInfo = tempFiveDays
  const weatherInCity = {
    // coordinats: {
    //   lat: data.data[0].GeoPosition.Latitude,
    //   lon: data.data[0].GeoPosition.Longitude
    // },
    name: data.data[0].LocalizedName,
    country: data.data[0].Country.LocalizedName,
    temperature: weather.Temperature.Metric.Value,
    unit: weather.Temperature.Metric.Unit,
    weatherText: weather.WeatherText,
    weatherIcon: weather.WeatherIcon
  }
const result = {
  currentWeather:weatherInCity,
  fiveDaysWeather:fiveDaysInfo
}

  res.send(result)
})



module.exports = router