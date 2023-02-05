import Image from 'next/image'
import React from 'react'

const ProductDetails = ({ Details, User }) => {
    return (
        <>
            <div className='sm:max-md:border-2 sm:max-md:pt-3 flex flex-col sm:max-md:font-bold'>
                <div className='flex flex-row justify-between items-center ml-6 lg:ml-8 w-44 my-3'>
                    <span className=''>Ordered Products</span>
                    <span className='w-5 h-5 flex justify-center items-center rounded-full bg-black text-white'>{Details.products.length}</span>

                </div>

                <div className='rounded-b-md flex flex-col bg-white px-10 '>
                    <div className='border-b-2 border-dashed max-w-[600px]'>
                        {
                            Details.products.map((items, index) => (
                                <div key={index} className='flex flex-row justify-between'>

                                    <div className='flex flex-row my-4 sm:max-md:font-medium'>
                                        <Image className='w-12 h-12 mr-4 border-6 border-black' src={items.image} width={40} height={10} alt='' />
                                        <div>
                                            <h1 className='flex-col sm:max-md:w-28 sm:max-md:h-5 sm:max-md:overflow-hidden'>{items.name}</h1>
                                            <h1 className='text-toosm text-mygrey'>Qty: {items.quantity} Color: {items.color}</h1>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center font-bold'>৳{items.price}</div>

                                </div>
                            ))
                        }
                    </div>

                    <div className='border-b-2 border-dashed flex flex-col max-w-[600px]'>
                        <div className='flex flex-row justify-between my-4 font-medium'>
                            <span>Sub Total</span>
                            <span className=''> ৳ {Details.sub_total}</span>
                        </div>

                        <div className='flex flex-row justify-between my-4 font-medium'>
                            <span>Tax</span>
                            <span className=''> ৳ {Details.tax}</span>
                        </div>

                        <div className='flex flex-row justify-between my-4 font-medium'>
                            <span>Shipping Cost</span>
                            <span className=''> ৳ {Details.shipping_cost}</span>
                        </div>

                        <div className='flex flex-row justify-between my-4 font-medium'>
                            <span>Discount</span>
                            <span className=''> ৳ {Details.discount}</span>
                        </div>


                    </div>


                    <div className=' my-4 max-w-[600px] flex flex-row justify-between font-bold '>
                        <span>Grand Total</span>
                        <span className=''> ৳ {Details.grand_total}</span>

                    </div>

                </div>


            </div>
        </>
    )
}

export default ProductDetails