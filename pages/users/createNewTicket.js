import Image from 'next/image'
import React from 'react'
import PageName from '../../components/users/pageName'

import attach_image from "../../public/Nahin/support_ticket/attach_image.svg"

const createNewTicket = () => {
    return (
        <div className='mt-10 pt-3  bg-white'>
            <div className='pl-10'>
                <PageName name={"Create New Ticket"} />
            </div>

            <div className='mt-2 lg:w-[601px] px-10 py-5 border-1 lg:h-[730px] sm:max-lg:mx-6 mb-2'>
                <div className='flex flex-col'>
                    <span className='my-3'>
                        <span className='text-gray-400 text-sm'>Subject </span>
                        <span className='text-pink-500 text-sm'>*</span>
                    </span>
                    <input className='h-12 rounded-md px-6 border-1 border-slate-400' placeholder='Write Subject'/>
                </div>

                <div className='flex flex-col'>
                    <span className='my-3'>
                        <span className='text-gray-400 text-sm'>Order ID </span>
                        <span className='text-pink-500 text-sm'>*</span>
                    </span>
                    <input className='h-12 rounded-md px-6 border-1 border-slate-400' placeholder='Write Order ID'/>
                </div>

                <div className='flex flex-col'>
                    <span className='my-3'>
                        <span className='text-gray-400 text-sm'>Description </span>
                        <span className='text-pink-500 text-sm'>*</span>
                    </span>
                    <textarea className='min-h-[114px] rounded-md p-6 border-1 border-slate-400' placeholder='Provide a detailed description'/>
                </div>

                <div className='flex flex-col'>
                    <span className='my-3'>
                        <span className='text-gray-400 text-sm'>Attach Images </span>
                        <span className='text-pink-500 text-sm'>*</span>
                    </span>
                    <span className='flex w-44 h-11 border-1 rounded-md items-center px-4'>
                        <Image src={attach_image} className="mr-4"/>
                        <span>Attach Image</span>
                    </span>
                    {/* <input className='h-12 rounded-md px-6 border-1 border-slate-400' placeholder='Write Order ID'/> */}
                </div>

                <button className='bg-black text-white w-full h-12 rounded-md mt-12'>Proceed</button>


            </div>

        </div>
    )
}

export default createNewTicket

createNewTicket.getLayout = function PageLayout(page){
    return(
        <>{page}</>
    )
}