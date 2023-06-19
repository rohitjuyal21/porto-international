import React from 'react'
import './services.css'
import { ArrowCircleRight } from '@mui/icons-material'

const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="services__content">
            <h1 className="services__content-heading main-heading">SERVICES</h1>
            <div className="services__content-para">
                <p className='main-text'>
                Our sales team is always ready to serve you in a professional and fruitful way. Together with you, our producers, suppliers and logistic partners, we offer high-quality products against a competitive market price at the right time and place.
                <br />
                <br />
                Our people, experience and excellent service will surprise you. Our experienced shipping team is handling all the ins and outs, before, during and after loading and shipping, such as pre-shipment inspections, inland container trucking and export customs documentation. After your goods have been shipped, we monitor shipments and keep our clients informed with updated shipment and arrival information.
                <br />
                <br />
                We always go for in time delivery of your goods and documents worldwide.
                <br />
                <br />
                If you have plans to buy or sell products, you can count on us to find the ideal partner for your business. Our team is always ready to deliver the best service. We are with you for an enduring relationship!
                </p>

            </div>
            <div className="services__content-points">
                <div className="services__content-points_left services__content-points_container">
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Order Consolidation</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Product Labeling</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Shipping Inspection</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>International Freight Contracting</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Preparation of the Shipment Documentation</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Liscensing and Certification Assistance</span>
                    </div>
                </div>
                <div className="services__content-points_right">
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Production Monitoring</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Manufacturer's Inspection</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Logistics Planning</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Local Freight Contracting</span>
                    </div>
                    <div className='points'>
                        <ArrowCircleRight />
                        <span>Customs Planning</span>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Services