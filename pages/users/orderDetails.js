import Image from 'next/image'
import React, { useState } from 'react'

import Details from '../../components/users/OrderDetails/Details'

const orderDetails = () => {

    

    return (
        <div className='w-285 mt-10 pt-6 pl-10 bg-white'>
            <h1 className='text-xl font-normal'>Order Details</h1>

            <div className='w-268 mt-7 px-1 rounded-sm grid bg-listBar'>

                <Details />
                
                

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