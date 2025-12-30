import AllRenewSection from './AllRenewSection'
import MiddleSection from '../../Components/Middle_Section/MiddleAddressSection'
import SocialBar from '../../Components/SocialMedia/SocialBar'
import FooterServices from '../../Components/Footer/FooterServices'
import InfoFooter from '../../Components/Footer/FooterInfo'
import InsuranceFooter from '../../Components/Footer/InsuranceFooter'
import BottomFooter from '../../Components/Footer/BottomFooter'
import AskRiaChat from '../../Components/AskRiaChat'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


function MainAllRenewal() {
  return (
    <div>
          <Header /> 
          <AllRenewSection />
          <MiddleSection />
          <SocialBar />
          <Footer />
          <AskRiaChat />
    </div>
  )
}

export default MainAllRenewal;
