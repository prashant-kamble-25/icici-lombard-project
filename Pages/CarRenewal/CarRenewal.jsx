import React from 'react'

import CarRenewalCard from './CarRenewalCard';
import FooterServices from '../../Components/Footer/FooterServices';
import InfoFooter from '../../Components/Footer/FooterInfo';
import InsuranceFooter from '../../Components/Footer/InsuranceFooter';
import BottomFooter from '../../Components/Footer/BottomFooter';
import AskRiaChat from '../../Components/AskRiaChat';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SocialBar from '../../Components/SocialMedia/SocialBar';


function CarRenewal() {
  return (
    <div>     
      <Header />
      <CarRenewalCard />
      <SocialBar />
      <Footer />
      <AskRiaChat />
    </div>
  )
}

export default CarRenewal;
