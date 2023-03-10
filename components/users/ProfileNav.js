import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'


import user from "../../public/Nahin/icons/panel/user.svg"

import icon1 from "../../public/Nahin/icons/panel/1.svg"
import icon2 from "../../public/Nahin/icons/panel/2.svg"
import icon3 from "../../public/Nahin/icons/panel/3.svg"
import icon4 from "../../public/Nahin/icons/panel/4.svg"
import icon5 from "../../public/Nahin/icons/panel/5.svg"
import icon6 from "../../public/Nahin/icons/panel/6.svg"
import icon7 from "../../public/Nahin/icons/panel/7.svg"
import icon8 from "../../public/Nahin/icons/panel/8.svg"
import icon9 from "../../public/Nahin/icons/panel/9.svg"
import icon10 from "../../public/Nahin/icons/panel/10.svg"
import icon11 from "../../public/Nahin/icons/panel/11.svg"


const ProfileNav = () => {

    const router = useRouter()

    const [Profile, setProfile] = useState(
        { image: user, name: "Monkey D. Luffy", phone: '01401549873', mail: "luffy@pirateking.com" }
    )

    const [Navbar, setNavbar] = useState([
        { image: icon1, name: "Dashboard", color: "none", link: "/users", pop: "" },
        { image: icon2, name: "Track Orders", color: "none", link: "/users/trackOrders", pop: "" },
        { image: icon3, name: "Purchase History", color: "none", link: "/users/purchaseHistory", pop: "New" },
        { image: icon4, name: "My Wishlist", color: "none", link: "/users/wishlist", pop: "" },
        { image: icon5, name: "Payment Method", color: "none", link: "/users/paymentMethod", pop: "" },
        { image: icon6, name: "Refund Request", color: "none", link: "/users", pop: "" },
        { image: icon7, name: "Manage Shipping Address", color: "none", link: "/users/shippingAddress", pop: "" },
        { image: icon8, name: "Change Password", color: "none", link: "/users/changePassword", pop: "" },
        { image: icon9, name: "Change Language", color: "none", link: "/users/changeLanguage", pop: "" },
        { image: icon10, name: "Support Ticket", color: "none", link: "/users/supportTicket", pop: "02" },
        { image: icon11, name: "Terms & Conditions", color: "none", link: "/users", pop: "" },
    ])
    const [NavBtn, setNavBtn] = useState("none")




    return (
        <div className='hidden lg:block border-1 rounded-sm bg-white shadow-sm border-[#DADADA] max-h-[795px] mt-10 min-w-[350px] xl:w-100'>
            <div className='ml-5 pt-4'>
                <div className='flex'>
                    <h1 className='text-xl'>My Profile | </h1>
                    <button className='text-blue-500 ml-2'>Edit</button>
                </div>

                <div className='flex mt-4 mb-6 h-24'>
                    <div><Image src={Profile.image} alt='' className="w-24 h-24 rounded-full" /></div>
                    {/* <Image src={Profile.image} className="object-fill" /> */}
                    <div className='ml-2'>
                        <h1 className='font-semibold text-sm mb-1'>{Profile.name}</h1>
                        <h1 className='text-sm'>{Profile.phone}</h1>
                        <h1 className='text-sm'>{Profile.mail}</h1>
                    </div>
                </div>
            </div>


            <div className='transition-all ease-linear duration-400 my-2'>
                {
                    Navbar.map((items, index) => {

                        return (
                            <button key={index}
                                className=' w-full h-12 px-5 flex flex-row items-center justify-between
                                border-b-2 border-slate-100 focus:bg-[#FFC800]
                                hover:bg-[#FFC800] transition-all ease-linear duration-400'
                                style={{ backgroundColor: NavBtn }}
                                onClick={() => {
                                    router.push({ pathname: items.link, query: { name: items.name } })
                                }}
                            >
                                <span className='flex flex-row'>
                                    <Image src={items.image} className="w-4 h-4" alt='' />
                                    <span className='ml-3 font-medium'>{items.name}</span>
                                </span>

                                {(items.pop != "")?<span className='bg-[#004CFF]/20 rounded-md text-sm py-1 px-3'>{items.pop}</span>:<></>}
                            </button>
                        )


                    })
                }
            </div>

            <div className='flex flex-row bg-black border-2 rounded-md text-white h-12 w-full justify-center items-center '><h1>Sell On Shoplover</h1></div>

        </div>
    )
}

export default ProfileNav