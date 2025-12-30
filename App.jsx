// import './App.css'
import MainAllRenewal from './Pages/AllRenewal/MainAllRenewal'
import CarRenewal from './Pages/CarRenewal/CarRenewal'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import BikeRenewal from './Pages/BikeRenewal/BikeRenewal'
import PolicySearch from './Login/Login'
import ErrorPage from './Pages/Error/ErrorPage'
import Routing from './Routing/Routing'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
   <div>   
      <Routing />
   </div>
  )
}

export default App;

