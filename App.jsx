// import './App.css'
import MainAllRenewal from './Pages/AllRenewal/MainAllRenewal'
import CarRenewal from './Pages/CarRenewal/CarRenewal'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import BikeRenewal from './Pages/BikeRenewal/BikeRenewal'
import PolicySearch from './Login/Login'

function App() {

  return (
   <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/renew-policy-online/AllRenewal' element={<MainAllRenewal />} />
          <Route path='/motor-insurance/car-insurance/renewal/' element={<CarRenewal />} />
          <Route path='/motor-insurance/bike-insurance/renewal/' element={<BikeRenewal />} />
          {/* <Route path="*" Component={NotFound} /> */}
        </Routes>
      
        
      </BrowserRouter>
      {/* <PolicySearch /> */}
      
   </div>
  )
}

export default App;

