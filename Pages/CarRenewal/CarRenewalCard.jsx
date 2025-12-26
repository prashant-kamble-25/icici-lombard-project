import React, { useState } from 'react'

import './../../Style/CarRenewal.css'
import CarTable from '../../Components/Table/Car_Table/CarTable';


function CarRenewalCard() {
    const [option, setOption] = useState("policy");
  return (
    <div className='car-renewal-main'>
        <div className='renewal-card'>
              <div className="card-wrapper">
                  <div className="insurance-card">
                      <h2 className="title">Car Insurance Renewal</h2>
                      <p className="subtitle">
                          Choose below option to retrieve your policy
                      </p>

                      <div className="radio-group">
                          <label className="radio-item">
                              <input
                                  type="radio"
                                  name="searchBy"
                                  value="registration"
                                  checked={option === "registration"}
                                  onChange={() => setOption("registration")}
                              />
                              <span className="custom-radio"></span>
                              Registration No
                          </label>

                          <label className="radio-item">
                              <input
                                  type="radio"
                                  name="searchBy"
                                  value="policy"
                                  checked={option === "policy"}
                                  onChange={() => setOption("policy")}
                              />
                              <span className="custom-radio"></span>
                              Policy No
                          </label>
                      </div>

                      <div className="input-section">
                          <label className="input-label">{option}</label>
                          <input type="text" className="underline-input" />
                      </div>

                      <div className="action-row">
                          <button className="proceed-btn">Proceed</button>
                          <a href="#" className="login-link">
                              Click here to login for quicker renewal
                          </a>
                      </div>
                  </div>
              </div>
        </div>

        <div>
              <CarTable />
        </div>
        <div>
              <p>Disclaimers: *If there is any revision in Motor Third Party (TP) rates, the difference in premium due to the revised rates will be payable by the policyholder immediately, and if such revised premium is not paid then the motor insurance policy will not be valid. <br />

              *We have masked your personal information for security.</p>
        </div>
        <div>
              <a href="https://www.icicilombard.com/insurance-disclaimer?id=car-disc" target='_blank'>Disclaimers</a>
        </div>
      
    </div>
  )
}

export default CarRenewalCard;
