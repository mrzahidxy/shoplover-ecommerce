import {useState} from 'react'
import Image from 'next/image'

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

    const [Profile, setProfile] = useState(
        {image:user, name:"Monkey D. Luffy", phone:'01401549873', mail:"luffy@pirateking.com"}
    )

    const [Navbar, setNavbar] = useState([
        {image:icon1, name:"Dashboard", color:"none"},
        {image:icon2, name:"Track Orders", color:"none"},
        {image:icon3, name:"Purchase History", color:"none"},
        {image:icon4, name:"My Wishlist", color:"none"},
        {image:icon5, name:"Payment Method", color:"none"},
        {image:icon6, name:"Refund Request", color:"none"},
        {image:icon7, name:"Manage Shipping Address", color:"none"},
        {image:icon8, name:"Change Password", color:"none"},
        {image:icon9, name:"Change Language", color:"none"},
        {image:icon10, name:"Support Ticket", color:"none"},
        {image:icon11, name:"Terms & Conditions", color:"none"},
    ])
    const [NavBtn, setNavBtn] = useState("none")

  return (
    <div className=' border-1 rounded-sm border-[#DADADA] lg:w-96 lg:mr-4 pb-4'>
        <div className='ml-5 pt-4'>
            <div className='flex'>
                <h1 className='text-xl'>My Profile | </h1>
                <button className='text-blue-500 ml-2'>Edit</button>
            </div>

            <div className='flex mt-4 h-24'>
                <div><Image src={Profile.image} className="w-24 h-24 rounded-full" /></div>
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
                Navbar.map((items, index)=>{
                    
                    return (<button
                        className='flex flex-row items-center w-full h-14
                            border-b-2 border-slate-100 
                            hover:bg-rose-300 hover:text-rose-600 hover:stroke-rose-600 transition-all ease-linear duration-400'
                        style={{backgroundColor:NavBtn}}
                        onClick={()=>{
                            
                        }}
                    >
                        <Image src={items.image} className="ml-5 w-4 h-4"/>
                        <span className='ml-3 font-medium'>{items.name}</span>
                    </button>)
                })
            }
        </div>

        <div className='flex flex-row bg-black text-white h-12 w-full justify-center items-center '><h1>Sell On Shoplover</h1></div>
        
    </div>
  )
}

export default ProfileNav