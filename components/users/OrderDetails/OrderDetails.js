import Image from 'next/image'
import React, { useState } from 'react'
import Lottie from "lottie-react";

import green from "../../../public/Nahin/order_details/green_check.svg"
import white from "../../../public/Nahin/order_details/white_dot.svg"
import red from "../../../public/Nahin/order_details/red_pulsing_dot.json"

const OrderDetails = ({ Details, User }) => {


    const PaymentType = () => {
        if (Details.payment_status == "Paid") {
            return <h1 className='text-green-500 font-medium'>{Details.payment_status}</h1>
        } else {
            return <h1 className='text-red-500 font-medium'>{Details.payment_status}</h1>

        }
    }

    const Status = () => {
        if (Details.status == "Delivered") {
            return <h1 className='ml-2 w-20 text-sm font-medium text-center py-1 px-2 rounded-sm bg-lightgreen text-lightgreen'>{Details.status}</h1>
        } else {
            return <h1 className='ml-2 w-20 text-sm font-medium text-center py-1 px-2 rounded-sm bg-lightorange text-lightorange'>{Details.status}</h1>

        }
    }

    const Progress=({progress})=>{
        if(progress == 1){
            return(
                <>
                    <Image src={green} alt='' className="w-full" />
                </>

            ) 
        }else if(progress == 0){
            return(
                <>
                    <Lottie animationData={red} className="h-10 "/>
                </>

            ) 
        }else{
            return(
                <>
                    <Image src={white} alt='' className="w-full" />
                </>

            ) 
        }
    }

    return (
        <>
            <div className='hidden md:grid col-span-2 grid-cols-7 items-center my-1'>
                <h1 className='ml-8 text-sm col-span-3'>Order ID : {Details.id}</h1>
                <div className='flex flex-row col-span-4 items-center ml-2'>
                    <h1 className='mr-1 text-sm'>Order status:</h1>
                    <Status />
                </div>
            </div>

            

            <div className='col-span-2 bg-white grid md:grid-cols-2 lg:grid-cols-7'>

                {/* Left side, progress bar */}
                <div className='flex flex-col md:col-span-1 lg:col-span-3 rounded-md sm:max-md:border-1'>

                    {/* Order Placed */}

                    <div className='mt-6 flex flex-row h-18'>
                        <h1 className='ml-5 h-8 w-10 flex-wrap text-toosm text-mygrey'>{Details.progress_date[0]}</h1>
                        <div className='flex flex-col justify-center items-center mx-3'>
                            <Progress progress={Details.progress[0]} /> 
                            {(Details.progress[0] == 1)?<div className='h-full w-1 bg-green-500'></div>:<div className='h-full w-1 bg-slate-300'></div>}
                        </div>
                        <div className='flex flex-col w-56 mx-3'>
                            <h1 className='text-sm font-medium'>Order Placed</h1>
                            <h1 className='text-toosm text-mygrey'>Your order is successfully placed to Shoplover. Order ID #20345535334</h1>
                        </div>
                    </div>

                    {/* Confirmed */}
                    <div className='flex flex-row h-18'>
                        <h1 className='ml-5 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>{Details.progress_date[1]}</h1>
                        <div className='flex flex-col justify-center items-center mx-3'>
                            <Progress progress={Details.progress[1]} />
                            {(Details.progress[1] == 1)?<div className='h-full w-1 bg-green-500'></div>:<div className='h-20 w-1 bg-slate-300'></div>}
                        </div>
                        <div className='flex flex-col w-56 mx-3'>
                            <h1 className=' font-medium'>Confirmed</h1>
                            <h1 className=' text-toosm text-mygrey'>We’ve receive your order. It’ll be verified and confirmed shortly.</h1>
                        </div>
                    </div>

                    {/* Picked Up */}
                    <div className='flex flex-row h-18'>
                        <h1 className='ml-5 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>{Details.progress_date[2]}</h1>
                        <div className='flex flex-col justify-center items-center mx-3'>
                            <Progress progress={Details.progress[2]} />
                            {(Details.progress[2] == 1)?<div className='h-20 w-1 bg-green-500'></div>:<div className='h-20 w-1 bg-slate-300'></div>}
                        </div>
                        <div className='flex flex-col w-56 mx-3'>
                            <h1 className=' font-medium'>Picked Up</h1>
                            <h1 className=' text-toosm text-mygrey'>We’ve confirmed your order.</h1>
                        </div>
                    </div>

                    {/* On the way */}
                    <div className='flex flex-row h-18'>
                        <h1 className='ml-5 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>{Details.progress_date[3]}</h1>
                        <div className='flex flex-col justify-center items-center mx-3'>
                            <Progress progress={Details.progress[3]} />
                            {(Details.progress[3] == 1)?<div className='h-20 w-1 bg-green-500'></div>:<div className='h-20 w-1 bg-slate-300'></div>}
                        </div>
                        <div className='flex flex-col w-56 mx-3'>
                            <h1 className=' font-medium'>On the way</h1>
                            <h1 className=' text-toosm text-mygrey'>Your package is being sent by a rider, to the destination address.</h1>
                        </div>
                    </div>

                    {/* Delivered */}
                    <div className='flex flex-row h-18'>
                        <h1 className='ml-5 h-8 w-10 text-sm flex-wrap text-toosm text-mygrey'>{Details.progress_date[4]}</h1>
                        <div className='flex flex-col  items-center mx-3'>
                            <Progress progress={Details.progress[4]} />
                        </div>
                        <div className='flex flex-col w-56 mx-3'>
                            <h1 className=' font-medium'>Delivered</h1>
                            <h1 className=' text-toosm text-mygrey'>You’ll receive your order soon.</h1>
                        </div>
                    </div>

                </div>

                {/* right side, order and shipping details */}

                <div className='flex flex-col sm:max-md:px-2 md:col-span-1 lg:col-span-4 mt-4 lg:ml-2 mg:max-lg:items-end rounded-md sm:max-md:border-1'>
                    {/* order details */}
                    <div className='md:w-72 lg:w-80 flex flex-col text-md'>
                        
                        <div className=' flex justify-between mt-2'>
                            <h1 className='text-neutral-400'>Order Id:</h1>
                            <h1>{Details.id}</h1>
                        </div>

                        <div className=' flex justify-between mt-2'>
                            <h1 className='text-neutral-400'>Order Date: </h1>
                            <h1>{Details.date}</h1>
                        </div>

                        <div className=' flex justify-between mt-2'>
                            <h1 className='text-neutral-400'>Total Amount:</h1>
                            <span className='flex  font-semibold'>
                                <h1>৳ {Details.grand_total}</h1>
                                (<PaymentType />)
                            </span>
                        </div>

                        <div className=' flex justify-between mt-2'>
                            <h1 className='text-neutral-400 '>Payment Method:</h1>
                            <h1>{Details.payment_method}</h1>
                        </div>

                        <div className=' flex justify-between mt-2'>
                            <h1 className='text-neutral-400'>Shipping Method:</h1>
                            <h1>{Details.shipping_method}</h1>
                        </div>
                    </div>

                    <div className='md:w-72 lg:w-80 my-3 h-1 border-t-2 border-dashed border-neutral-300 sm:max-md:hidden'></div>

                    {/* shipping details */}
                    <div className='mt-2 w-80 h-36 flex flex-col text-md'>
                        <h1 className='text-neutral-400'>Shipping Address:</h1>
                        <h1>{User.name}</h1>
                        <h1>{User.location}</h1>
                        <h1 className='text-neutral-400'>{User.phone}</h1>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OrderDetails