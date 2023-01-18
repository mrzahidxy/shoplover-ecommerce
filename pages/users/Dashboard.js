import React from 'react'
import CartDetails from "../../components/users/Dashboard/CartDetails"
import RecentOrders from "../../components/users/Dashboard/RecentOrders"


const Dashboard = () => {

  return (
    <div>
        <div className='flex flex-col bg-white mt-10'>
                <div className='pl-10'>
                    <CartDetails />
                    <RecentOrders />
                </div>

                <div className=''>
                    
                </div>

            </div>
    </div>
  )
}

export default Dashboard