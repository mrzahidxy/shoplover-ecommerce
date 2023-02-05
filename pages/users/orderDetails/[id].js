import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import dashboard from "../data/dashboard.json"

import OrderDetails from '../../../components/users/OrderDetails/OrderDetails'
import ProductDetails from '../../../components/users/OrderDetails/ProductDetails'

import speaker from "../../../public/Nahin/wishlist/product/speaker.svg"
import phone from "../../../public/Nahin/wishlist/product/phone.svg"
import bag from "../../../public/Nahin/wishlist/product/bag.svg"
import earbuds from "../../../public/Nahin/wishlist/product/earbuds.svg"
import earbud2 from "../../../public/Nahin/wishlist/product/earbud2.svg"

import left_arrow from "../../../public/Nahin/icons/left_arrow.svg"

const orderDetails = () => {

    const router = useRouter()

    const [Details, setDetails] = useState({
        id: "",
        date: "",
        payment_status: "",
        payment_method: "",
        shipping_method: "",
        status: "",
        progress:[-1, -1, -1, -1, -1],
        progress_date: ["", "", "", "", ""],
        products: [
        ],
        sub_total: 0,
        tax: 0,
        shipping_cost: 0,
        discount: 0,
        grand_total: 0,
    })

    const [User, setUser] = useState({
        name: "Rakibul Alam Nahin",
        location: "Moon, Orbit-Earth, Cluster-SOL, Galaxy-Milky Way",
        phone: "+8801401549873"
    })

    useEffect(()=>{
        let orderID = router.query
        console.log("order id", orderID);
        console.log(dashboard.Orders[orderID.id])
        if(dashboard.Orders[orderID.id] != undefined){
            setDetails(dashboard.Orders[orderID.id])
        }

        if(dashboard.address != undefined){
            setUser(dashboard.address)
        }
    })

    return (
        <div className='mt-10 pt-6 items-center px-2 xl:pl-10 bg-white'>
            <div className=' flex'>
                <button><Image src={left_arrow} alt='' className="mr-3 lg:hidden " /></button>
                <h1 className='text-xl font-normal'>Order Details</h1>
            </div>

            <div className='2xl:w-285 mt-4 rounded-md grid md:bg-listBar shadow-myshadow '>
                <OrderDetails Details={Details} alt='' User={User} />
            </div>

            <div className='2xl:w-285 my-7 rounded-md grid shadow-myshadow md:bg-listBar'>
                <ProductDetails Details={Details} alt='' User={User} />
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