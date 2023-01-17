import Image from 'next/image'
import React from 'react'

const ProductDetails = ({ Details, User }) => {
    return (
        <>
            <div className=' my-2'>
                <div className='flex items-center'>
                    <h1 className='ml-10 text-sm col-span-3'>Ordered Products</h1>
                    <h1 className='ml-2 w-5 h-5 flex justify-center items-center rounded-full bg-black text-white'>{Details.products.length}</h1>

                </div>

                <div className='mt-4 flex flex-col bg-white shadow-myshadow'>

                    {
                        Details.products.map((items) => (
                            <div className='ml-8 flex flex-row w-[742px] justify-between'>

                                {/* <div className='flex flex-row my-6 w'>
                                    <Image src={products.image} className="ml-10 h-16 w-16 mr-4 rounded-md border-1" />
                                    <div className='flex-col'>
                                        <h1 className=' font-light text-sm'>{products.title}</h1>
                                        <h1 className='text-sm font-light text-mygrey'>Qty: {products.quantity}</h1>
                                        <h1 className='text-sm'>৳{products.price}</h1>

                                    </div>
                                </div> */}

                                <div className='flex flex-row my-6'>
                                    <Image className='w-12 h-12 mr-4' src={items.image} />
                                    <div className='flex-col'>
                                        <h1>{items.title}</h1>
                                        <h1>Qty: {items.quantity} Color: {items.color}</h1>
                                    </div>
                                </div>

                                <h1>৳{items.price}</h1>

                            </div>
                        ))
                    }
                    <div className='ml-8 w-[742px] border-t-2 border-dashed border-neutral-300'></div>
{/* subTotal
tax
shipcost
discount
total */}
                    <div className=' w-[742px] my-8 ml-8'>
                        <div className='flex flex-row ml text-lg font-medium justify-between items-center'> <h1 clas>Sub Total</h1> <h1> ৳ {Details.subTotal}</h1> </div>
                        <div className='flex flex-row ml text-lg font-medium justify-between'> <h1 clas>Tax</h1> <h1> ৳ {Details.tax}</h1> </div>
                        <div className='flex flex-row ml text-lg font-medium justify-between'> <h1 clas>Shipping Cost</h1> <h1> ৳ {Details.shipcost}</h1> </div>
                        <div className='flex flex-row ml text-lg font-medium justify-between'> <h1 clas>Discount</h1> <h1> ৳ {Details.discount}</h1> </div>
                        
                        <div className='my-4 w-[742px] border-t-2 border-dashed border-neutral-300'></div>
                        
                        <div className='flex flex-row ml text-lg font-medium justify-between'> <h1 clas>Grand Total</h1> <h1> ৳ {Details.total}</h1> </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default ProductDetails