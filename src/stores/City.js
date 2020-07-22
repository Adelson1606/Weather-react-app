import { observable, action } from 'mobx'
import Axios from 'axios'
const axios = require('axios')

export class City {
  @observable name
  @observable country
  @observable temperature
  @observable unit
  @observable weatherText
  @observable weatherIcon
  @observable fiveDaysWeather


  @observable favorites = []

  constructor() {
    this.name = ''
    this.country = ''
    this.temperature = ''
    this.unit = ''
    this.weatherText = ''
    this.weatherIcon = ''
    this.fiveDaysWeather = []
  }

  @action getTLV = async() => {
    const defaultName = 'Tel-Aviv'
    // const response = await axios.get(`/city/${defaultName}`)
    const response = await require('./data.json')
    const cityData = response
    this.name =cityData.currentWeather.name
    this.country = cityData.currentWeather.country
    this.temperature = cityData.currentWeather.temperature
    this.unit = cityData.currentWeather.unit
    this.weatherText = cityData.currentWeather.weatherText
    this.weatherIcon = cityData.currentWeather.weatherIcon
    this.fiveDaysWeather = cityData.fiveDaysWeather
  }

  @action searchCity = async(city)=>{
 const response = await axios.get(`http://localhost:8080/city/${city}`)
 const cityData = response.data
 this.name =cityData.currentWeather.name
 this.country = cityData.currentWeather.country
 this.temperature = cityData.currentWeather.temperature
 this.unit = cityData.currentWeather.unit
 this.weatherText = cityData.currentWeather.weatherText
 this.weatherIcon = cityData.currentWeather.weatherIcon
 this.fiveDaysWeather = cityData.fiveDaysWeather
  }
  
  @action addToFav = (city) => {
    this.favorites.push(city)
    console.log(this.favorites)
  }

  @action removeFromFav =(city) =>{
   const index = this.favorites.findIndex(c=>c.name===city)
   this.favorites.splice(index, 1)
   console.log(this.favorites)
  }
}