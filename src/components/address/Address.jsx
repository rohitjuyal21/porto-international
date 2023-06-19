import React from 'react'
import './address.css'
import Menu from '../menu/Menu'

const Address = () => {
  return (
    <div className='address'>
        <div className="address__container">
            <div className="address__container-left">
                <h3 className='ac-left-heading'>PORTO INTERNATIONAL</h3>
                <p className='main-text'>
                UNITED STATES
                <br />
                15805 Biscayne Blvd, Aventura, Miami, 33160 - FLORIDA, USA
                <br />
                Phone:+ 1 786 708-5250
                <br />
                Email: info@portointernational.com
                <br />
                </p>
                <div className="ac-left-icon">
                <i class="fa-brands fa-whatsapp"></i>
                <p className='main-text'>Brasil +55 41 99188-8442</p>
                </div>
            </div>
            <div className="address__container-right">
                <h3 className="ac-right-heading">Mapa do Site</h3>
                <div className='ac-right-links'>
                    <Menu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Address