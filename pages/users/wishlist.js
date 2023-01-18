import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import bin from "../../public/Nahin/wishlist/bin.svg"
import cart from "../../public/Nahin/wishlist/cart.svg"

import speaker from "../../public/Nahin/wishlist/product/speaker.svg"
import phone from "../../public/Nahin/wishlist/product/phone.svg"
import bag from "../../public/Nahin/wishlist/product/bag.svg"
import earbuds from "../../public/Nahin/wishlist/product/earbuds.svg"
import earbud2 from "../../public/Nahin/wishlist/product/earbud2.svg"
import PageName from '../../components/users/pageName'


const wishlist = ({ Component, pageProps }) => {

    const router = useRouter();


    const [Wishes, setWishes] = useState([
        { image: speaker, title: "JBL Party Box On-The-Go Portable Party And Wireless Mic", discounted: "1160", original: "1400" },
        { image: phone, title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone", discounted: "12500", original: "13800" },
        { image: bag, title: "Water Resistant Men Crossbody Sling Bag with USB Port", discounted: "279", original: "550" },
        { image: earbuds, title: "Realme Tws Wireless Earbuds", discounted: "330", original: "450" },
        { image: earbud2, title: "Realme Dizo Go Pods Tws - Black", discounted: "4670", original: "4799" },
        { image: speaker, title: "JBL Party Box On-The-Go Portable Party And Wireless Mic", discounted: "1160", original: "1400" },
        { image: phone, title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone", discounted: "12500", original: "13800" },
        { image: bag, title: "Water Resistant Men Crossbody Sling Bag with USB Port", discounted: "279", original: "550" },
        { image: earbuds, title: "Realme Tws Wireless Earbuds", discounted: "330", original: "450" },
        { image: earbud2, title: "Realme Dizo Go Pods Tws - Black", discounted: "4670", original: "4799" },
    ])

    return (
        <div className=' lg:w-268 bg-white mt-10 px-10'>
            <PageName name={router.query.name} />
            {/* <div className='h-10  flex-row bg-listBar items-center font-normal text-sm hidden sm:flex'> */}

            <div className='mt-5'>
                <div className='h-12 hidden md:grid grid-cols-10 bg-listBar items-center'>
                    {/* <h1 className='ml-8 mr-[535px]'>Item</h1>
                    <h1 className=''>Amount</h1>
                    <h1 className='ml-32 hidden lg:flex'>Delete</h1>
                    <h1 className='ml-28 mr-24'>Purchase</h1> */}

                    <h1 className=' col-span-5  ml-14'>Item</h1>
                    <h1 className=' text-center'>Amount</h1>
                    <h1 className=' text-center hidden lg:flex justify-center col-span-2'>Delete</h1>
                    <h1 className=' col-span-2 sm:max-lg:ml-20'>Purchase</h1>

                </div>
            </div>



            <div className='flex flex-col'>
                {
                    Wishes.map((products) => (
                        // <div className='mt-4 flex flex-row h-28 items-center border-b-1 border-borderColor'>

                        //     <div className='ml-8 w-[440px] flex flex-row items-center'>
                        //         <input type='checkbox' className='mr-4' />
                        //         <Image src={products.image} className="w-20 h-20 rounded-md border-1 border-borderColor"/>
                        //         <h1 className='ml-7'>{products.title}</h1>
                        //     </div>
                        //     <div className='ml-32 w-16 h-11 flex flex-col items-center text-lg'>
                        //         <h1 className='text-[#DE146A] font-medium'>৳{products.discounted}</h1>
                        //         <h1 className='text-mygrey'>৳{products.original}</h1>
                        //         <div className='-translate-y-3'><div className='w-14 h-0.5 bg-mygrey'></div></div>
                        //     </div>
                        //     <button className='ml-32 w-16 hidden lg:flex'>
                        //         <Image src={bin} className="w-6 h-6 border-1"/>
                        //     </button>
                        //     <button className='ml-20 mr-24 bg-black text-white w-28 h-9 rounded-lg'>
                        //         <h1 className='hidden sm:flex justify-center'>Add to cart</h1>
                        //         <Image src={cart} className="w-8 h-8 sm:hidden" />
                        //     </button>

                        // </div>

                        <div className='mt-4 grid md:grid-cols-10 items-center border-b-1 border-borderColor'>

                            <div className=' ml-8 flex flex-row items-center col-span-5 '>
                                <input type='checkbox' className='mr-4 lg:hidden' />
                                <Image src={products.image} className="w-20 h-20 rounded-md border-1 border-borderColor" />
                                <h1 className='ml-2 md:ml-7 text-sm md:text-md'>{products.title}</h1>
                            </div>
                            <div className='w-28 md:w-full ml-36 md:ml-6 h-11 flex flex-row md:flex-col items-center text-lg'>
                                <h1 className='text-[#DE146A] text-sm md:text-base font-medium'>৳{products.discounted}</h1>
                                <h1 className='text-mygrey text-sm md:text-base ml-1 md:ml-0'>৳{products.original}</h1>
                                <div className='-translate-x-12 md:-translate-x-0 md:-translate-y-3'><div className='w-14 h-0.5 bg-mygrey'></div></div>
                            </div>
                            <button className=' justify-center hidden lg:flex col-span-2'>
                                <Image src={bin} className="w-6 h-6 border-1" />
                            </button>
                            <div className=' text-white col-span-2 flex flex-col md:max-lg:ml-20'>
                                <button className='bg-black rounded-lg hidden md:flex justify-center items-center w-28 h-9 '>Add to cart</button>
                                <Image src={cart} className="w-8 h-8 md:hidden " />
                            </div>

                        </div>
                    ))
                }
            </div>





        </div>
    )

}

wishlist.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}

export default wishlist