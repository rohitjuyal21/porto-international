import React from 'react'
import './aboutUs.css'
import about from '../../assets/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubesStacked, faMoneyCheckDollar, faTruckPlane, faUsers } from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
    return (
    <>
        <div className='about' id='about'>
            <div className="about__container">
                <h1 className='about__container-heading main-heading'>ABOUT US</h1>
                <div className="about__container-content">
                    <div className="about__content-left">
                        <p className='main-text'>With a team with international expertise, after years of experience in foreign trade with extensive knowledge of demands and needs, Porto International was created focusing on the Americas to operate in diverse products categories.</p>
                        <div className="about__links">
                            <div className="about__links-left">
                                <div className="about-link">
                                    <FontAwesomeIcon icon={faCubesStacked} />
                                    <span><a href="#products">Products</a></span>
                                </div>
                                <div className="about-link">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span><a href="#services">Sales Team</a></span>
                                </div>
                            </div>
                            <div className="about__links-right">
                                <div className="about-link">
                                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                                    <span><a href="#services">Foreign Trade</a></span>
                                </div>
                                <div className="about-link">
                                    <FontAwesomeIcon icon={faTruckPlane} />
                                    <span><a href="#services">Logistic</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__content-right">
                        <img src={about} alt={about} />
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </>
    )
}

export default AboutUs