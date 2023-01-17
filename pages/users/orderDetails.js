import Image from 'next/image'
import React, { useState } from 'react'

import OrderDetails from '../../components/users/OrderDetails/OrderDetails'
import ProductDetails from '../../components/users/OrderDetails/ProductDetails'

import speaker from "../../public/Nahin/wishlist/product/speaker.svg"
import phone from "../../public/Nahin/wishlist/product/phone.svg"
import bag from "../../public/Nahin/wishlist/product/bag.svg"
import earbuds from "../../public/Nahin/wishlist/product/earbuds.svg"
import earbud2 from "../../public/Nahin/wishlist/product/earbud2.svg"

const orderDetails = () => {

    const [Details, setDetails] = useState({
        date: "1 Nov 2022, 03:20pm",
        amount: 620,
        type: "Dimu Na",
        payMethod: "Gold on Delivery",
        shipMethod: "Plane Delivery",
        status: "Delivering",
        products: [
            { image: speaker, title: "JBL Party Box On-The-Go Portable Party And Wireless Mic", quantity: 1, price: 1400, color:"Yellow" },
            { image: phone, title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone", quantity: 2, price: 5000, color:"Blue" },
            { image: bag, title: "Water Resistant Men Crossbody Sling Bag with USB Port", quantity: 1, price: 1400, color:"white" },
        ],
        subTotal: 595,
        tax: 0,
        shipcost: 29,
        discount: 0,
        total: 620,
    })

    const [User, setUser] = useState({
        username: "Rakibul Alam Nahin",
        address: "Moon, Orbit-Earth, Cluster-SOL, Galaxy-Milky Way",
        phone: "+8801401549873"
    })

    return (
        <div className='w-285 mt-10 pt-6 pl-10 bg-white'>
            <h1 className='text-xl font-normal'>Order Details</h1>

            <div className='w-268 mt-7 px-1 rounded-sm grid bg-listBar'>
                <OrderDetails Details={Details} User={User}/>
            </div>

            <div className='w-268 mt-3 px-1 rounded-sm grid bg-listBar'>
                <ProductDetails Details={Details} User={User} /> 
            </div>

        </div>
    )
}

export default orderDetails

orderDetails.getLayout = function PageLayout(page) {
    return (
        <>{page}</>
    )
}