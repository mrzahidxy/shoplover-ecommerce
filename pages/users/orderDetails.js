import Image from 'next/image'
import React, { useState } from 'react'

import green from "../../public/Nahin/order_details/green_check.svg"
import white from "../../public/Nahin/order_details/white_dot.svg"

const orderDetails = () => {

    const [Details, setDetails] = useState({
        date: "1 Nov 2022, 03:20pm",
        amount: "620",
        type: "Dimu Na",
        payMethod: "Gold on Delivery",
        shipMethod: "Plane Delivery",
        status: "Delivering",
    })

    const [User, setUser] = useState({
        username:"Rakibul Alam Nahin",
        address: "Moon, Orbit-Earth, Cluster-SOL, Galaxy-Milky Way",
        phone: "+8801401549873"
    })

    const PaymentType=()=>{
        if(Details.type == "Paid"){
            return <h1 className='text-green-500 font-medium'>{Details.type}</h1>
        }else{
            return <h1 className='text-red-500 font-medium'>{Details.type}</h1>

        }
    }

    const Status=()=>{
        if(Details.status == "Delivered"){
            return <h1 className='ml-2 w-20 text-sm font-medium text-center py-1 px-2 rounded-sm bg-lightgreen text-lightgreen'>{Details.status}</h1>
        }else{
            return <h1 className='ml-2 w-20 text-sm font-medium text-center py-1 px-2 rounded-sm bg-lightorange text-lightorange'>{Details.status}</h1>

        }
    }

    return (
        <div className='w-285 mt-10 pt-6 pl-10 bg-white'>
            <h1 className='text-xl font-normal'>Order Details</h1>

            <div className='w-268 mt-7 px-1 rounded-sm grid bg-listBar'>

                <div className='col-span-2 grid grid-cols-7 items-center my-2'>
                    <h1 className='ml-10 text-sm col-span-3'>Order ID : #SL22092837006</h1>
                    <div className='flex flex-row col-span-4 items-center ml-2'>
                        <h1 className='mr-1 text-sm'>Order status:</h1>
                        <Status />
                    </div>
                </div>

                <div className='col-span-2 bg-white grid grid-cols-7 shadow-myshadow'>
                    
                    {/* Left side, progress bar */}
                    <div className='flex flex-col col-span-3'>

                        {/* Order Placed */}

                        <div className='mt-8 flex flex-row h-20'>
                            <h1 className='ml-8 h-8 w-10 flex-wrap text-toosm text-mygrey'>1 Nov 15:20</h1>
                            <div className='flex flex-col justify-center items-center mx-3'>
                                <Image src={green} className="w-full ml-[2px]" />
                                <div className='h-20 w-[3px] bg-green-500'></div>
                            </div>
                            <div className='flex flex-col w-56 mx-3 -mt-2'>
                                <h1 className='font-medium'>Order Placed</h1>
                                <h1 className='text-toosm text-mygrey'>Your order is successfully placed to Shoplover. Order ID #20345535334</h1>
                            </div>
                        </div>
                        
                        {/* Confirmed */}
                        <div className='flex flex-row h-20'>
                            <h1 className='ml-8 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>1 Nov 15:20</h1>
                            <div className='flex flex-col justify-center items-center mx-3'>
                                <Image src={green} className="w-full ml-[2px]" />
                                <div className='h-20 w-[3px] bg-green-500'></div>
                            </div>
                            <div className='flex flex-col w-56 mx-3'>
                                <h1 className=' font-medium'>Confirmed</h1>
                                <h1 className=' text-toosm text-mygrey'>We’ve receive your order. It’ll be verified and confirmed shortly.</h1>
                            </div>
                        </div>

                        {/* Picked Up */}
                        <div className='flex flex-row h-20'>
                            <h1 className='ml-8 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>1 Nov 15:20</h1>
                            <div className='flex flex-col justify-center items-center mx-3'>
                                <Image src={green} className="w-full ml-[2px]" />
                                <div className='h-20 w-[3px] bg-green-500'></div>
                            </div>
                            <div className='flex flex-col w-56 mx-3'>
                                <h1 className=' font-medium'>Picked Up</h1>
                                <h1 className=' text-toosm text-mygrey'>We’ve confirmed your order.</h1>
                            </div>
                        </div>

                        {/* On the way */}
                        <div className='flex flex-row h-20'>
                            <h1 className='ml-8 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>1 Nov 15:20</h1>
                            <div className='flex flex-col justify-center items-center mx-3'>
                                <Image src={green} className="w-full ml-[2px]" />
                                <div className='h-20 w-[3px] bg-slate-300'></div>
                            </div>
                            <div className='flex flex-col w-56 mx-3'>
                                <h1 className=' font-medium'>Picked Up</h1>
                                <h1 className=' text-toosm text-mygrey'>Your package is being sent by a rider, to the destination address.</h1>
                            </div>
                        </div>

                        {/* Delivered */}
                        <div className='flex flex-row h-20'>
                            <h1 className='ml-8 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>1 Nov 15:20</h1>
                            <div className='flex flex-col  items-center mx-3'>
                                <Image src={white} className="w-full ml-[2px]" />
                            </div>
                            <div className='flex flex-col w-56 mx-3'>
                                <h1 className=' font-medium'>Delivered</h1>
                                <h1 className=' text-toosm text-mygrey'>You’ll receive your order soon.</h1>
                            </div>
                        </div>

                    </div>

                    {/* right side, order and shipping details */}

                    <div className='flex flex-col col-span-4 mt-4 lg:ml-2'>
                        {/* order details */}
                        <div className='w-80 h-36 flex flex-col text-md justify-evenly'>
                            <div className=' flex justify-between'>
                                <h1 className='text-neutral-400'>Order Date: </h1>
                                <h1>{Details.date}</h1>
                            </div>

                            <div className=' flex justify-between'>
                                <h1 className='text-neutral-400'>Total Amount:</h1>
                                <span className='flex  font-semibold'>
                                    <h1>৳ {Details.amount}</h1> 
                                    (<PaymentType />)
                                </span>
                            </div>

                            <div className=' flex justify-between'>
                                <h1 className='text-neutral-400 '>Payment Method:</h1>
                                <h1>{Details.payMethod}</h1>
                            </div>

                            <div className=' flex justify-between'>
                                <h1 className='text-neutral-400'>Shipping Method:</h1>
                                <h1>{Details.shipMethod}</h1>
                            </div>
                        </div>

                        <div className='w-80 h-1 border-t-2 border-dashed border-neutral-300'></div>

                        {/* shipping details */}
                        <div className='mt-5 w-80 h-36 flex flex-col text-md'>
                            <h1 className='text-neutral-400'>Shipping Address:</h1>
                            <h1>{User.username}</h1>
                            <h1>{User.address}</h1>
                            <h1 className='text-neutral-400'>{User.phone}</h1>
                        </div>
                        
                    </div>

                </div>
                
                

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