import {useState} from 'react'
import Image from 'next/image'

import shoe from "../../../public/Nahin/product/shoe.png"
import watch from "../../../public/Nahin/product/watch.png"
import coke from "../../../public/Nahin/product/coke.png"
import headphone from "../../../public/Nahin/product/headphone.png"
import ipad from "../../../public/Nahin/product/ipad.png"
import lemon from "../../../public/Nahin/product/lemon.png"
import perfume from "../../../public/Nahin/product/perfume.png"
import lens from "../../../public/Nahin/product/lens.png"
import rightArrow from "../../../public/Nahin/icons/rarrow.svg"


const RecentOrders = () => {

    const [Orders, setOrders] = useState([
        {id: "SL 123456745", products: [shoe, watch], date: "13 Dec, 2022", amount: "৳1009", details: 'https://www.google.com'},
        {id: "SL 123456769", products: [coke, headphone, ipad ], date: "14 Dec, 2022", amount: "৳8690", details: 'https://www.google.com'},
        {id: "SL 123456742", products: [lemon, perfume, lens], date: "15 Dec, 2022", amount: "৳3785", details: 'https://www.google.com'},
    ])

    return (
        <div>
            <h1 className='text-xl my-3'>Recent Orders</h1>

            <div className='flex flex-col lg:w-[1073px]'>
                <div className='flex flex-row lg:w-[1073px] h-16 bg-listBar items-center font-sans font-semibold'>
                    <h1 className='ml-6 sm:ml-12'>Order ID#</h1>
                    <h1 className='hidden md:flex ml-20 lg:ml-28'>Order Items</h1>
                    <h1 className='ml-6 md:ml-36 lg:ml-56'>Order Placed On</h1>
                    <h1 className='ml-10 lg:ml-20'>Amount</h1>
                </div>
                {
                    Orders.map((items, index)=>(
                        <div className='flex flex-row' key={index}>
                            <div className='flex flex-row w-[1073px] h-16 items-center'>
                                <h1 className='recentOrders w-32 sm:w-40 ml-6 sm:ml-12'>{items.id}</h1>
                                <div className='recentOrders hidden md:flex w-56 lg:w-72 lg:ml-5'>
                                    {
                                        items.products.map((prod, index2)=>(
                                            <Image src={prod} key={index2} className="ml-2 w-10 h-10" alt=''/>
                                        ))
                                    }
                                </div>
                                <h1 className='recentOrders w-18 lg:ml-7'>{items.date}</h1>
                                <h1 className='recentOrders w-20 lg:w-28 sm:ml-10 lg:ml-20'>{items.amount}</h1>
                                <a className='hidden lg:flex ml-14 underline text-blue-400' href={items.details}>View Details</a>
                                <button className='hidden md:flex lg:hidden hover:text-blue-500'><Image src={rightArrow} alt='' className="w-5 h-5"/></button>
                                
                            </div>
                        </div>
                    ))
                }
                
            </div>
            
        </div>
    )
}

export default RecentOrders