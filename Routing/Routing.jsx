import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import MainAllRenewal from '../Pages/AllRenewal/MainAllRenewal'
import CarRenewal from '../Pages/CarRenewal/CarRenewal'
import BikeRenewal from '../Pages/BikeRenewal/BikeRenewal'
import ErrorPage from '../Pages/Error/ErrorPage'

function Routing() {
  return (
      <BrowserRouter>

          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/renew-policy-online/AllRenewal' element={<MainAllRenewal />} />
              <Route path='/motor-insurance/car-insurance/renewal/' element={<CarRenewal />} />
              <Route path='/motor-insurance/bike-insurance/renewal/' element={<BikeRenewal />} />
              <Route path="*" Component={<ErrorPage />} />
          </Routes>


      </BrowserRouter>
  )
}

export default Routing;
