import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import PageName from '../../components/users/pageName'

import bin from "../../public/Nahin/icons/bin.svg"

const paymentMethod = () => {

    const router = useRouter();

    return (
        <div className='bg-white mt-10 pt-9 flex flex-col'>


            {/* <h1 className='text-lg ml-9 lg:mb-4'>Change Password</h1> */}

            <div className='ml-8'><PageName name={router.query.name} /></div>

            <div className='flex flex-row lg:w-[473px] lg:border-1 p-9'>

                <span className='w-100 h-14 px-4 bg-listBar flex flex-row justify-between items-center border-1 rounded-md border-neutral-300'>
                    <span className='text-sm text-pink-500'>Saved bkash account</span>
                    <span className='text-sm text-gray-400 font-medium'>01444455986</span>
                </span>

                <button><Image src={bin} alt="" className="ml-4" /></button>


            </div>

        </div>
    )
}

export default paymentMethod

paymentMethod.getLayout = function PageLayout(page) {
    return (
        <>{page}</>
    )
}