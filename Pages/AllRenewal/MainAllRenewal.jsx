import Header from '../../Components/Header/HeaderPage'
import Navbar from '../../Components/Header/Navbar'
import AllRenewSection from './AllRenewSection'
import MiddleSection from '../../Components/Middle_Section/MiddleAddressSection'
import SocialBar from '../../Components/SocialMedia/SocialBar'
import FooterServices from '../../Components/Footer/FooterServices'
import InfoFooter from '../../Components/Footer/FooterInfo'
import InsuranceFooter from '../../Components/Footer/InsuranceFooter'
import BottomFooter from '../../Components/Footer/BottomFooter'
import AskRiaChat from '../../Components/AskRiaChat'


function MainAllRenewal() {
  return (
    <div>
          <Header />
          <Navbar />
          <AllRenewSection />
          <MiddleSection />
          <SocialBar />
          <FooterServices />
          <InfoFooter />
          <InsuranceFooter />
          <BottomFooter />
          <AskRiaChat />
    </div>
  )
}

export default MainAllRenewal;
