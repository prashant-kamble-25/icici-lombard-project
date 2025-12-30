
import BikeRenewalCard from './BikeRenewalCard';
import SocialBar from '../../Components/SocialMedia/SocialBar';
import FooterServices from '../../Components/Footer/FooterServices';
import InfoFooter from '../../Components/Footer/FooterInfo';
import InsuranceFooter from '../../Components/Footer/InsuranceFooter';
import BottomFooter from '../../Components/Footer/BottomFooter';
import AskRiaChat from '../../Components/AskRiaChat';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function BikeRenewal() {
  return (
    <div>
          <Header />
          <BikeRenewalCard />          
          <SocialBar />
          <Footer />
          <AskRiaChat />
          
    </div>
  )
}

export default BikeRenewal;
