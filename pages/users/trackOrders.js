import React from 'react'
import PageName from '../../components/users/pageName'
import { useRouter } from 'next/router'

const TrackOrders = () => {

    const router = useRouter();

    return (

        <div className='flex flex-col bg-white px-4 py-4 lg:p-11 lg:mt-10 '>

            {/* <h1 className='text-lg ml-9 lg:mb-4'>Change Password</h1> */}
            <PageName name={router.query.name} />

            <div className='flex flex-col lg:w-268 shadow-myshadow rounded-md px-4 pb-6 md:p-9'>

                <span className='flex flex-col lg:w-96'>
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