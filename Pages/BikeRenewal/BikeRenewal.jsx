import React from 'react'
import Header from '../../Components/Header/HeaderPage';
import Navbar from '../../Components/Header/Navbar';
import BikeRenewalCard from './BikeRenewalCard';
import SocialBar from '../../Components/SocialMedia/SocialBar';
import FooterServices from '../../Components/Footer/FooterServices';
import InfoFooter from '../../Components/Footer/FooterInfo';
import InsuranceFooter from '../../Components/Footer/InsuranceFooter';
import BottomFooter from '../../Components/Footer/BottomFooter';
import AskRiaChat from '../../Components/AskRiaChat';


function BikeRenewal() {
  return (
    <div>
          <Header />
          <Navbar />
          <BikeRenewalCard />          
          <SocialBar />
          <FooterServices />
          <InfoFooter />
          <InsuranceFooter />
          <BottomFooter />
          <AskRiaChat />
          
    </div>
  )
}

export default BikeRenewal;
