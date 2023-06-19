import React from 'react'
import './products.css'
import Tyres from '../tyres/Tyres'
import mythos from '../../assets/mythos-2.png'
import endura from '../../assets/endura-pro-2.png'
import forklift from '../../assets/stockvault-forklift-truck135248-2.png'
import tractor from '../../assets/tractor-2.png'
import ferentino from '../../assets/logo-ferentio-1.png'
import portoTyres from '../../assets/porto-tyres-2.png'
import Commodities from '../commodities/Commodities'
import peas from '../../assets/peas-1024x687.jpg'
import onions from '../../assets/onions-2-2-683x1024.jpg'
import diagnostic_test from '../../assets/diagnostic-test.jpg'

const Products = () => {
  return (
    <div className='products' id='products'>
        <h1 className='products__heading main-heading'>PRODUCTS</h1>
        <div className="products__tyres">
            <h4 className="products__tyres-heading">
                Tyres
            </h4>
            <div className="products__tyres-content">
                <Tyres 
                    image={mythos}
                    title="Passenger"
                    description="The perfect combination of European technology and design with the exclusive Sri Lankan rubber"
                    logo={ferentino} />
                <Tyres
                    image={endura}
                    title="Truck"
                    description="Soon in Brazil"
                    logo={ferentino} />
                <Tyres
                    image={forklift}
                    title="Industrial"
                    description="Super flexible tires with Sri Lanka's famous natural rubber"
                    logo={ferentino} />
                <Tyres 
                    image={tractor}
                    title="Agriculture"
                    description="Our extensive and exclusive range of OTR tires. Porto works on any terrain."
                    logo={portoTyres}/>
            </div>
        </div>
        <div className="products__below">
            <Commodities 
            title="Agricultural Commodities"
            image1={peas}
            image2={onions}
            name1="Peas"
            name2="Onions"
            />
            <Commodities
            title="Medical Devices"
            image1={diagnostic_test}
            name1="Diagnostic Tests" />
        </div>
    </div>
  )
}

export default Products