import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import PageName from '../../components/users/pageName'

import left_arrow from "../../public/Nahin/icons/left_arrow.svg"


const changePassword = () => {

    const router = useRouter();

    console.log(router.query.name);

    return (
        <div className='bg-white mt-10 pt-9 flex flex-col'>


            {/* <h1 className='text-lg ml-9 lg:mb-4'>Change Password</h1> */}

            <PageName name={router.query.name} />

            <div className='flex flex-col lg:w-[473px]  lg:border-1 p-9'>

                <span className='flex'>
                    <h1 className='text-slate-400'>New Password</h1>
                    <h1 className='ml-1 text-pink-600'>*</h1>
                </span>
                <input type={'password'} className="mt-1 pl-4 w-full h-12 border-1 border-slate-400 rounded-md" />

                
                <span className='flex mt-6'>
                    <h1 className='text-slate-400'>New Password</h1>
                    <h1 className='ml-1 text-pink-600'>*</h1>
                </span>
                <input type={'password'} className="mt-1 pl-4 w-full h-12 border-1 border-slate-400 rounded-md" />


                <button className=' mt-8 pl-4 w-full h-12 border-1 bg-black text-white rounded-md'>Confirm</button>



            </div>

        </div>
    )
}

export default changePassword


changePassword.getLayout = function PageLayout(page) {
    return (
        <>{page}</>
    )
}
