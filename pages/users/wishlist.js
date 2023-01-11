import Image from 'next/image'
import {useState} from 'react'

import bin from "../../public/Nahin/wishlist/bin.svg"
import speaker from "../../public/Nahin/wishlist/product/speaker.svg"
import phone from "../../public/Nahin/wishlist/product/phone.svg"
import bag from "../../public/Nahin/wishlist/product/bag.svg"
import earbuds from "../../public/Nahin/wishlist/product/earbuds.svg"
import earbud2 from "../../public/Nahin/wishlist/product/earbud2.svg"


const wishlist = ({ Component, pageProps }) => {

    const [Wishes, setWishes] = useState([
        {image: speaker, title: "JBL Party Box On-The-Go Portable Party And Wireless Mic", discounted: "1160", original: "1400"},
        {image: phone, title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone", discounted: "12500", original: "13800"},
        {image: bag, title: "Water Resistant Men Crossbody Sling Bag with USB Port", discounted: "279", original: "550"},
        {image: earbuds, title: "Realme Tws Wireless Earbuds", discounted: "330", original: "450"},
        {image: earbud2, title: "Realme Dizo Go Pods Tws - Black", discounted: "4670", original: "4799"},
    ])

    return (
        <div className='m-6'>
            <h1 className='mb-4 text-lg'>My Wishlist</h1>
            <div className='h-10 flex flex-row bg-listBar items-center font-normal text-sm'>
                <h1 className='ml-8'>Item</h1>
                <h1 className='ml-[535px]'>Amount</h1>
                <h1 className='ml-32'>Delete</h1>
                <h1 className='ml-28 mr-24'>Purchase</h1>

            </div>

            <div className='flex flex-col'>
                {
                    Wishes.map((products)=>(
                        <div className='mt-4 flex flex-row h-28 items-center border-b-1 border-borderColor'>
                            <div className='ml-8 w-[440px] flex flex-row items-center'>
                                <Image src={products.image} className="w-20 h-20 rounded-md border-1 border-borderColor"/>
                                <h1 className='ml-7'>{products.title}</h1>
                            </div>
                            <div className='ml-32 w-16 h-11 flex flex-col items-center'>
                                <h1 className='text-[#DE146A]'>৳{products.discounted}</h1>
                                <h1 className='text-mygrey'>৳{products.original}</h1>
                                <div className='-translate-y-3'><div className='w-14 h-0.5 bg-mygrey'></div></div>
                            </div>
                            <button className='ml-32 w-16'>
                                <Image src={bin} className="w-6 h-6 border-1"/>
                            </button>
                            <button className='ml-24 mr-24 bg-black text-white w-28 h-9 rounded-lg'>
                                Add to cart
                            </button>

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