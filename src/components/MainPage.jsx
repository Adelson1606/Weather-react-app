import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import City from './City'
import FiveDays from './FivaDays';

function MainPage() {
  return (
    <div>
      <NavBar />
      <Search />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom:'20px' }}>
        <City />

      </div>
      <FiveDays />
    </div>
  )
}

export default MainPage
