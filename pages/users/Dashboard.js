import React, { useEffect, useState } from 'react'
import CartDetails from "../../components/users/Dashboard/CartDetails"
import RecentOrders from "../../components/users/Dashboard/RecentOrders"

import dashboard from './data/dashboard.json';

const Dashboard = () => {


    return (
        <div>
            <div className='flex flex-col flex-wrap bg-white mt-10 py-3 lg:p-7'>
                <div className=''>
                    <CartDetails data={dashboard}/>
                    <RecentOrders data={dashboard} />
                </div>

            </div>
        </div>
    )
}

export default Dashboard