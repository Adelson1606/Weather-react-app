import React from 'react'
import NavBar from './NavBar';
import FavoriteCity from './FavoriteCity';
import { inject, observer } from 'mobx-react'

const Favorites = inject("CityStore")(observer((props) => {
  return (
    <div>
      <NavBar />
      {props.CityStore.favorites.map(c=>  <FavoriteCity key={c} city ={c}/>)}
      
    </div>
  )
}))

export default Favorites
