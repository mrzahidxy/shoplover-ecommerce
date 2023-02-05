import Image from 'next/image'
import React from 'react'

const ProductDetails = ({ Details, User }) => {
    return (
        <>
            <div className='sm:max-md:border-2 sm:max-md:pt-3 sm:max-md:font-bold'>
                <div className='flex items-center ml-6'>
                    <h1 className=' text-sm sm:max-md:text-lg col-span-3'>Ordered Products</h1>
                    <h1 className='ml-2 w-5 h-5 flex justify-center items-center rounded-full bg-black text-white'>{Details.products.length}</h1>

                </div>

                <div className='mt-4 rounded-b-md flex flex-col bg-white'>

                    {
                        Details.products.map((items, index) => (
                            <div key={index} className='sm:mx-4 lg:ml-8 px-2 md:grid md:grid-cols-2 sm:flex sm:flex-row  sm:max-md:justify-between'>

                                <div className='flex flex-row my-4 sm:max-md:font-medium'>
                                    <Image className='w-12 h-12 mr-4' src={items.image} width={40} height={10} alt='' />
                                    <div>
                                        <h1 className='flex-col sm:max-md:w-28 sm:max-md:h-5 sm:max-md:overflow-hidden'>{items.name}</h1>
                                        <h1 className='text-toosm text-mygrey'>Qty: {items.quantity} Color: {items.color}</h1>
                                    </div>
                                </div>

                                <div className='flex flex-row justify-end my-4 lg:w-64'>
                                    <h1 className='flex flex-row'>৳{items.price}</h1>

                                </div>

                            </div>
                        ))
                    }
                    <div className='sm:mx-4 lg:ml-8 border-t-2 border-dashed border-neutral-300'></div>

                    <div className=' sm:mx-4 lg:ml-8 px-4 grid sm:grid-cols-2 my-2 '>

                        <div className=' flex flex-col'>
                            <h1 className='my-1'>Sub Total</h1>
                            <h1 className='my-1'>Tax</h1>
                            <h1 className='my-1'>Shipping Cost</h1>
                            <h1 className='my-1'>Discount</h1>


                        </div>

                        <div className='lg:w-64 flex flex-col justify-end'>
                            <h1 className='my-1 '> ৳ {Details.sub_total}</h1>
                            <h1 className='my-1 '> ৳ {Details.tax}</h1>
                            <h1 className='my-1 '> ৳ {Details.shipping_cost}</h1>
                            <h1 className='my-1 '> ৳ {Details.discount}</h1>
                        </div>

                    </div>
                    <div className='sm:mx-4 md:ml-8 px-4 border-t-2 border-dashed border-neutral-300'></div>

                    <div className='sm:mx-4 lg:ml-8 px-4 grid md:grid-cols-2 my-6 sm:flex sm:flex-row  sm:max-md:justify-between'>
                        <h1>Grand Total</h1>
                        <h1 className='flex flex-row justify-end lg:w-64 '> ৳ {Details.grand_total}</h1>

                    </div>

                </div>


            </div>
        </>
    )
}

export default ProductDetails