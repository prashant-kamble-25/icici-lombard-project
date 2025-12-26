import React from 'react'
import Header from '../../Components/Header/HeaderPage';
import Navbar from '../../Components/Header/Navbar';
import CarRenewalCard from './CarRenewalCard';
import FooterServices from '../../Components/Footer/FooterServices';
import InfoFooter from '../../Components/Footer/FooterInfo';
import InsuranceFooter from '../../Components/Footer/InsuranceFooter';
import BottomFooter from '../../Components/Footer/BottomFooter';
import AskRiaChat from '../../Components/AskRiaChat';


function CarRenewal() {
  return (
    <div>     
      <Header />
      <Navbar />
      <CarRenewalCard />
      <FooterServices />
      <InfoFooter />     
      <InsuranceFooter />
      <BottomFooter />
      <AskRiaChat />
    </div>
  )
}

export default CarRenewal;
