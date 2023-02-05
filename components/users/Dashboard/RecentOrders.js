import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import shoe from "../../../public/Nahin/product/shoe.png"
import watch from "../../../public/Nahin/product/watch.png"
import coke from "../../../public/Nahin/product/coke.png"
import headphone from "../../../public/Nahin/product/headphone.png"
import ipad from "../../../public/Nahin/product/ipad.png"
import lemon from "../../../public/Nahin/product/lemon.png"
import perfume from "../../../public/Nahin/product/perfume.png"
import lens from "../../../public/Nahin/product/lens.png"
import rightArrow from "../../../public/Nahin/icons/rarrow.svg"


const RecentOrders = ({ data }) => {

    const router = useRouter()

    const [Orders, setOrders] = useState([
        { id: "SL 123456745", products: [shoe, watch], date: "13 Dec, 2022", amount: "৳1009", details: '/users/orderDetails' },
        { id: "SL 123456769", products: [coke, headphone, ipad], date: "14 Dec, 2022", amount: "৳8690", details: '/users/orderDetails' },
        { id: "SL 123456742", products: [lemon, perfume, lens], date: "15 Dec, 2022", amount: "৳3785", details: '/users/orderDetails' },
    ])

    useEffect(() => {
        if (data != [] || data != undefined) {
            setOrders(data.Orders)
        }

        return () => {
            <></>
        }
    }, [])


    return (
        <div>
            <h1 className='text-xl my-3'>Recent Orders</h1>
            {/* lg:w-285 */}
            <div className='flex flex-col 2xl:w-268'>
                <div className='md:max-lg:mx-3 h-9 grid grid-cols-3 md:grid-cols-5  bg-listBar text-sm text-slate-600/80'>
                    <h1 className='h-full pl-4 flex items-center text-toosm font-semibold'>Order ID#</h1>
                    <h1 className='h-full hidden md:flex items-center justify-center text-toosm font-semibold'>Order Items</h1>
                    <h1 className='h-full flexRowCenter text-toosm font-semibold'>Order Placed On</h1>
                    <h1 className='h-full flexRowCenter text-toosm font-semibold'>Total Amount</h1>
                    {/* <h1 className='bg-indigo-500'>Amount</h1> */}
                </div>
                {
                    Orders.map((items, index) => (
                        <div className='sm:max-lg:mx-3 py-2 grid grid-cols-3 md:grid-cols-5 font-thin justify-start text-sm text-slate-500 border-b-1' key={index}>
                            {/* w-[1073px] */}

                            <span className='pl-4 flexRowCenter justify-start'>{items.id}</span>
                            <div className=' hidden w-full md:flex flexRowCenter flex-wrap text-toosm overflow-hidden'>
                                {
                                    items.products.map((prod, index2) => (
                                        <Image key={index2} src={prod.image} width={40} height={10} className="h-10 w-10 m-0.5 rounded-md" alt='' />
                                    ))
                                }
                            </div>
                            <span className='flexRowCenter text-toosm text-slate-500'>{items.date}</span>
                            <span className='flexRowCenter text-toosm '>৳ {items.grand_total}</span>
                            <span className='lg:flex flexRowCenter text-toosm underline text-blue-400'>
                                <Link href={`/users/orderDetails/${items._id}`} className='hidden lg:flex underline text-blue-400'>View Details</Link>
                                <button className='hidden md:flex lg:hidden hover:text-blue-500'><Image src={rightArrow} alt='' className="w-5 h-5" /></button>

                            </span>


                        </div>
                    ))
                }

                {
                    // Orders.map((items, index) => (
                    //     <div className='flex flex-row' key={index}>
                    //         {/* w-[1073px] */}
                    //         <div className='flex flex-row w-full h-16 items-center'>
                    //             <h1 className='recentOrders w-32 sm:w-40 ml-6 sm:ml-12'>{items.id}</h1>
                    //             <div className='recentOrders hidden md:flex w-56 lg:w-72 lg:ml-5'>
                    //                 {
                    //                     items.products.map((prod, index2) => (
                    //                         <Image key={index2} src={prod.image} width={40} height={10} className="ml-2" alt='' />
                    //                     ))
                    //                 }
                    //             </div>
                    //             <h1 className='recentOrders w-18 lg:ml-7'>{items.date}</h1>
                    //             <h1 className='recentOrders w-20 lg:w-28 sm:ml-10 lg:ml-20'>৳ {items.grand_total}</h1>
                    //             <Link href={`/users/orderDetails/${items._id}`} className='hidden xl:flex ml-14 underline text-blue-400'>View Details</Link>
                    //             <button className='hidden md:flex lg:hidden hover:text-blue-500'><Image src={rightArrow} alt='' className="w-5 h-5" /></button>

                    //         </div>
                    //     </div>
                    // ))
                }

            </div>

        </div>
    )
}

export default RecentOrders