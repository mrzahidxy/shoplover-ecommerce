import React from 'react'

const TrackOrders = () => {
  return (
    <div className='bg-white mt-10 pl-10 rounded-sm w-285'>
        <h1 className='mt-7 text-lg font-medium'>Track Orders</h1>
        
        <div className=' flex flex-col w-268 h-72 p-8 mt-8 rounded-sm shadow-myshadow'>
            <h1 className='w-88 my-3'>Write your shoplover Order ID number to track your order.</h1>
            <input className='w-96 h-12 my-3 border-1 border-slate-500 rounded-md pl-5' placeholder='Order ID'></input>
            <button className='w-96 h-12 my-3 bg-black text-white rounded-md text-center'>Track</button>
        </div>
    </div>
  )
}

export default TrackOrders

TrackOrders.getLayout = function PageLayout(page){
    return(
        <>
            {page}
        </>
    )
}