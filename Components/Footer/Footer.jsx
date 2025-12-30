import React from 'react'
import FooterServices from './FooterServices'
import InfoFooter from './FooterInfo'
import BottomFooter from './BottomFooter'
import InsuranceFooter from './InsuranceFooter'

function Footer() {
    return (
        <div>
            <FooterServices />
            <InfoFooter />
            <InsuranceFooter />
            <BottomFooter />
        </div>
    )
}

export default Footer;
