import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import leftArrow from "../../public/Nahin/icons/left_arrow.svg"

import PageName from '../../components/users/pageName'

import speaker from "../../public/Nahin/wishlist/product/speaker.svg"
import phone from "../../public/Nahin/wishlist/product/phone.svg"
import bag from "../../public/Nahin/wishlist/product/bag.svg"
import earbuds from "../../public/Nahin/wishlist/product/earbuds.svg"
import earbud2 from "../../public/Nahin/wishlist/product/earbud2.svg"


const purchaseHistory = () => {

    const router = useRouter();

    const [Orders, setOrders] = useState([
        {
            products: [
                { image: speaker, title: "JBL Party Box On-The-Go Portable Party And Wireless Mic", quantity: 1, price: 1400 },
                { image: phone, title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone", quantity: 2, price: 5000 },
                { image: bag, title: "Water Resistant Men Crossbody Sling Bag with USB Port", quantity: 1, price: 1400 },
            ],
            orderid: "Nahin gorib manush",
            date: "13 Dec, 2022",
            amount: 7800,
            status: "Delivering"
        },

        {
            products: [
                { image: earbuds, title: "Realme Tws Wireless Earbuds", quantity: 1, price: 1400 },
                { image: earbud2, title: "Realme Dizo Go Pods Tws - Black", quantity: 2, price: 2000 },
            ],

            orderid: "Aro valo lagetese naa",
            date: "14 Dec, 2022",
            amount: 3400,
            status: "Delivered"
        },

    ])

    const [background, setBackground] = useState('lightgreen')


    return (
        <div className=' sm:mt-10 sm:ml-5 lg:w-268 flex flex-col items-center lg:items-start'>
            <div className=' flex flex-col lg:flex-row lg:items-center mb-9 self-start'>
                <PageName name={router.query.name} />

                <div>
                    <button className=' p-1 px-3 text-md font-medium rounded-md hover:bg-[#FDEDF3] hover:text-[#DE146A]'>All</button>
                    <button className=' p-1 px-3 text-md font-medium rounded-md hover:bg-[#FDEDF3] hover:text-[#DE146A]'>Confirmed</button>
                    <button className=' p-1 px-3 text-md font-medium rounded-md hover:bg-[#FDEDF3] hover:text-[#DE146A]'>Delivering</button>
                    <button className=' p-1 px-3 text-md font-medium rounded-md hover:bg-[#FDEDF3] hover:text-[#DE146A]'>Delivered</button>
                </div>
            </div>

            {
                Orders.map((orders) => {

                    let background = ''
                    let text = ""

                    if(orders.status === "Delivering"){
                        background = "rgba(255, 130, 54, 0.12)";
                        text = "rgb(255, 130, 54)";

                    }else if(orders.status === "Delivered"){
                        background = "rgba(67, 160, 71, 0.12)";
                        text = "rgb(67, 160, 71)";
                    }

                    return(
                        // view for tab or above
                        <>
                        <div className=' hidden md:flex md:flex-col md:max-lg:w-167 lg:w-268 font-medium bg-listBar text-[#071529] max-h-[720px] mt-4 overflow-auto shadow-md'>
    
                            <div className='grid grid-cols-2 h-16 items-center'>
                                <div>
                                    <h1 className='ml-10'>Order ID :{orders.orderid}</h1>
                                    <h1 className='ml-10 lg:hidden text-sm text-mygrey'>Ordered on {orders.date}</h1>

                                </div>

    
                                <div className='grid grid-cols-4'>
                                    <h1 className='text-center invisible lg:visible'>Order Placed On</h1>
                                    <h1 className='text-center'>Amount</h1>
                                    <h1 className=''>Status</h1>
                                    <h1 className='text-center hidden lg:flex'>Manage</h1>
                                </div>
                            </div>
    
                            <div className='grid grid-cols-2 bg-white items-center'>
    
                                <div className='flex flex-col'>
    
                                    {
                                        orders.products.map((products) => (
                                            <div className='flex flex-row my-6 w'>
                                                <Image src={products.image} className="ml-10 h-16 w-16 mr-4 rounded-md border-1" />
                                                <div className='flex-col'>
                                                    <h1 className=' font-light text-sm'>{products.title}</h1>
                                                    <h1 className='text-sm font-light text-mygrey'>Qty: {products.quantity}</h1>
                                                    <h1 className='text-sm'>৳{products.price}</h1>
    
                                                </div>
                                            </div>
                                        ))
                                    }
    
    
                                </div>
    
    
    
                                <div className='grid grid-cols-4 text-sm font-light'>
                                    <h1 className=' text-center invisible lg:visible'>{orders.date}</h1>
                                    <h1 className=' text-center'>৳{orders.amount}</h1>
                                    <h1 className="w-20 text-center py-1 px-2 rounded-sm col-span-2 lg:col-span-1" style={{backgroundColor:  background, color:text}}>{orders.status}</h1>
                                    <u className='text-center hidden lg:flex text-blue-400'><button className='text-blue-400' onClick={()=>{router.push("/users/orderDetails")}}>Veiw Details</button></u>
                                </div>
    
    
                            </div>
    
                        </div>

                        {/* View for mobile view */}
                        <div className=' md:hidden flex flex-col w-88 font-medium bg-listBar text-[#071529] max-h-[720px] mt-4 overflow-auto shadow-md'>
    
                            <div className='grid grid-cols-2 h-16 items-center'>
                                <div>
                                    <h1 className='ml-5 text-sm'>Order ID :{orders.orderid}</h1>
                                    <h1 className='ml-5 text-[12px] lg:hidden text-sm text-mygrey'>Ordered on {orders.date}</h1>
                                </div>
                                <h1 className=" w-24 h-6 py-3 ml-10 rounded-sm flex text-sm justify-center items-center " style={{backgroundColor:  background, color:text}}>{orders.status}</h1>

                            </div>
    
                            <div className='flex flex-col bg-white'>
    
                                <div className='flex flex-col'>
    
                                    {
                                        orders.products.map((products) => (
                                            <div className='flex flex-row my-4 h-14 px-4'>
                                                <Image src={products.image} className="h-14 w-14 mr-4 rounded-full border-1" />
                                                <div className='flex-col'>
                                                    <h1 className=' font-light text-sm h-4 overflow-hidden'>{products.title}</h1>
                                                    <h1 className='text-sm font-light text-mygrey'>Qty: {products.quantity}</h1>
                                                    <h1 className='text-sm'>৳{products.price}</h1>
    
                                                </div>
                                            </div>
                                        ))
                                    }
    
    
                                </div>

                                <div className='ml-6 mb-5 flex'>
                                    <h1 className='font-light'>Amount: </h1>
                                    <h1 className=''>৳{orders.amount}</h1>
                                </div>
    
    
                            </div>
    
                        </div>
                        </>
                    )
                })
            }



        </div>
    )
}

export default purchaseHistory


purchaseHistory.getLayout = function PageLayout(Page) {
    return (
        <>
            {Page}
        </>
    )
}