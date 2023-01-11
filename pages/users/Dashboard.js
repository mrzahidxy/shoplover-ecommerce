import React from 'react'
import CartDetails from "../../components/users/Dashboard/CartDetails"
import RecentOrders from "../../components/users/Dashboard/RecentOrders"


const Dashboard = () => {

  return (
    <div>
        <div className='flex flex-col ml-4'>
                <div>
                    <CartDetails />
                </div>

                <div className=''>
                    <RecentOrders />
                </div>

            </div>
    </div>
  )
}

export default Dashboard