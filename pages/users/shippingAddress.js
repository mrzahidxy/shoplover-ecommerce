import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import PageName from '../../components/users/pageName'

import green_check from "../../public/Nahin/icons/green_check.svg"
import white_dot from "../../public/Nahin/icons/white_dot.svg"

const shippingAddress = () => {

    const router = useRouter();

    return (


        <div className=" flex flex-col p-2 lg:w-285 gap-6 mt-10 rounded-md bg-white">

            <div className='lg:border-b-1 pl-3 lg:pl-6 flex flex-col mt-3 lg:flex-row lg:items-center'>
                <div className='mb-3'><PageName name={router.query.name} /></div>
                <button className=' mb-3 lg:ml-24 w-[150px] h-9 flex flex-row items-center justify-center bg-black text-white rounded-md'
                    onClick={()=>{router.push("/users/createShippingAddress")}}
                >+ Create New</button>
            </div>

            <div className="max-w-[389px] space-y-4 ml-2 border-2 rounded-md">
                <div className=" bg-[#F6F6F6] grid grid-cols-6 gap-3 p-4">
                    <div className="col-span-5 flex flex-col gap-1">
                        <span className="w-[65px] mb-2 py-1 font-medium text-xs bg-black text-white text-center">
                            Home
                        </span>
                        <span className="font-medium text-[15px]">
                            Rakibul Alam Nahin
                        </span>
                        <span className="font-base text-sm">
                            Corporate Office: Road no-1A, House No-32, Baridhara J Block,
                            Dhaka. 01401549873
                        </span>
                    </div>
                    <div>
                        <span className="text-primary text-sm">EDIT</span>
                        <div className="mt-11">
                            <Image src={white_dot} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-[389px] space-y-4 ml-2 border-2 rounded-md">
                <div className=" bg-[#F6F6F6] grid grid-cols-6 gap-3 p-4">
                    <div className="col-span-5 flex flex-col gap-1">
                        <span className="w-[65px] mb-2 py-1 font-medium text-xs bg-black text-white text-center">
                            Home
                        </span>
                        <span className="font-medium text-[15px]">
                            Monkey D. Luffy
                        </span>
                        <span className="font-base text-sm">
                            Corporate Office: Road no-1A, House No-32, Baridhara J Block,
                            Dhaka. 01401549873
                        </span>
                    </div>
                    <div>
                        <span className="text-primary text-sm">EDIT</span>
                        <div className="mt-11">
                            <Image src={green_check} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default shippingAddress

shippingAddress.getLayout = function PageLayout(page) {
    return (
        <>{page}</>
    )
}