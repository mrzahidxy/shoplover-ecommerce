import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import user from "../../public/Nahin/icons/panel/user.svg"

const ProfileNav = () => {

    const router = useRouter()

    const [Profile, setProfile] = useState(
        { image: user, name: "Monkey D. Luffy", phone: '+8801401549873', mail: "luffy@pirateking.com" }
    )

    const [Navbar, setNavbar] = useState([
        { image: "/Nahin/icons/panel/dashboard.svg", name: "Dashboard", color: "none", link: "/users", pop: "" },
        { image: "/Nahin/icons/panel/track_orders.svg", name: "Track Orders", color: "none", link: "/users/trackOrders", pop: "" },
        { image: "/Nahin/icons/panel/purchase_history.svg", name: "Purchase History", color: "none", link: "/users/purchaseHistory", pop: "New" },
        { image: "/Nahin/icons/panel/wishlist.svg", name: "My Wishlist", color: "none", link: "/users/wishlist", pop: "" },
        { image: "/Nahin/icons/panel/payment_method.svg", name: "Payment Method", color: "none", link: "/users/paymentMethod", pop: "" },
        { image: "/Nahin/icons/panel/shipping_address.svg", name: "Manage Shipping Address", color: "none", link: "/users/shippingAddress", pop: "" },
        { image: "/Nahin/icons/panel/change_password.svg", name: "Change Password", color: "none", link: "/users/changePassword", pop: "" },
        { image: "/Nahin/icons/panel/download.svg", name: "Downloads", color: "none", link: "/users", pop: "" },
        { image: "/Nahin/icons/panel/refund_request.png", name: "Sent Refund Request", color: "none", link: "/users", pop: "" },
        { image: "/Nahin/icons/panel/product_review.svg", name: "Product Review", color: "none", link: "/users", pop: "" },
        { image: "/Nahin/icons/panel/compare.svg", name: "Compare", color: "none", link: "/users", pop: "" },
        { image: "/Nahin/icons/panel/wallet.svg", name: "My Wallet", color: "none", link: "/users", pop: "" },
        // { image: icon9, name: "Change Language", color: "none", link: "/users/changeLanguage", pop: "" },
        { image: "/Nahin/icons/panel/support_ticket.svg", name: "Support Ticket", color: "none", link: "/users/supportTicket", pop: "02" },
        // { image: icon11, name: "Terms & Conditions", color: "none", link: "/users", pop: "" },
    ])
    const [SelectedBtn, setSelectedBtn] = useState(0)




    return (
        <div className=' hidden xl:block border-1 rounded-md bg-white shadow-sm border-[#DADADA] max-h-[795px] mt-10 w-[275px]'>
            <div className='group pl-6 h-44 pt-3 flexColCenter items-start border-b-1'>
                <div className=' flexRowCenter items-start'>
                    <h1 className='text-xl text-black/60'>My Profile | </h1>
                    <button className='text-blue-500 ml-2 text-sm'>Edit</button>
                </div>

                <div className='flex h-24'>
                    <div><Image src={Profile.image} alt='' className="w-16 h-16 rounded-full" /></div>
                    {/* <Image src={Profile.image} className="object-fill" /> */}
                    <div className='ml-4'>
                        <h1 className='font-semibold text-base mb-1'>Twinkle</h1>
                        <h1 className='text-toosm text-black/40'>{Profile.phone}</h1>
                        <h1 className='text-toosm text-black/40'>{Profile.mail}</h1>
                    </div>
                </div>
            </div>

            <div className='transition-all ease-linear duration-400 mt-6 m-2'>
                {
                    Navbar.map((items, index) => {

                        return (
                            <button key={index}
                                className=' w-full h-10 px-4 flex flex-row items-center justify-between
                                border-b-1 border-slate-100 focus:bg-[#FFC800]
                                hover:bg-[#FFC800]/10 transition-all ease-linear duration-400'
                                style={{ backgroundColor: (index == SelectedBtn)? "#FFC800":""}}
                                onClick={() => {
                                    router.push({ pathname: items.link, query: { name: items.name } });
                                    setSelectedBtn(index)
                                }}
                            >
                                <span className='flexRowCenter'>
                                    <Image src={items.image} width={3} height={3} className="w-3.5 h-3.5" alt='' />
                                    <span className='ml-3 text-toosm font-medium'>{items.name}</span>
                                </span>

                                {/* {(items.pop != "")?<span className='bg-[#004CFF]/20 rounded-md text-sm py-1 px-3'>{items.pop}</span>:<></>} */}
                            </button>
                        )


                    })
                }
            </div>

            <div className='mt-4 h-11 w-full flexRowCenter rounded-b-md bg-black text-white'><h1>Sell On Shoplover</h1></div>

        </div>
    )
}

export default ProfileNav