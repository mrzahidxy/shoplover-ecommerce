import React from 'react'
import CartDetails from "../../components/users/CartDetails"
import RecentOrders from "../../components/users/RecentOrders"


const Dashboard = () => {

  return (
    <div>
        <div className='flex flex-col ml-4 mt-4'>
                <div>
                    <CartDetails />
                </div>

                <div className='my-10'>
                    <RecentOrders />
                </div>

            </div>
    </div>
  )
}

export default Dashboard