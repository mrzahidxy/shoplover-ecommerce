import React from 'react'
import PageName from '../../components/users/pageName'
import { useRouter } from 'next/router'

const TrackOrders = () => {

    const router = useRouter();

    return (

        <div className='w-full max-w-[1072px] flex flex-col bg-white py-4 lg:mt-10 sm:max-md:h-[500px] md:max-lg:h-[800px]'>

            {/* <h1 className='text-lg ml-9 lg:mb-4'>Change Password</h1> */}
            <div className='lg:border-b-2 lg:pl-6'>
                <PageName name={router.query.name} />

            </div>

            <div className='flex flex-col md:max-lg:h-80 md:max-lg:justify-center sm:max-lg:items-center py-3 px-6 lg:pl-6 lg:border-0 border-2'>

                <span className='flex flex-col lg:w-88'>
                    <h1 className='my-3'>Write your shoplover Order ID number to track your order.</h1>
                    <input type={'password'} placeholder="Order ID" className="mt-1 pl-4 w-full h-12 border-1 border-slate-400 rounded-md" />


                    <button className=' mt-8 pl-4 w-full h-12 border-1 bg-black text-white rounded-md'>Track</button>
                </span>
            </div>

        </div>

    )
}

export default TrackOrders

TrackOrders.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}