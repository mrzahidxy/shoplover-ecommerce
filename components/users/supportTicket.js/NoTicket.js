import React from 'react'
import notfound from '../../../public/Nahin/support_ticket/notfound.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'


const NoTicket = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col w-full h-full items-center mt-32'>
            <Image src={notfound} alt=""/>
            <span className='italic text-[#BFBFBF]'>Oops!</span>
            <span className='text-sm text-[#BFBFBF]'>You don't have any ticket yet</span>
            <button className='mt-5 flex justify-center items-center bg-black text-white py-1 px-4 rounded-md text-sm'
                onClick={()=>{router.push("/users/createNewTicket")}}
            >+ Create New</button>
        </div>
    )
}

export default NoTicket