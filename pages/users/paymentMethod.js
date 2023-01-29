import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import PageName from '../../components/users/pageName'

import bin from "../../public/Nahin/icons/bin.svg"

const paymentMethod = () => {

    const router = useRouter();
    console.log(router.query.name);
    return (
        <div className='container bg-white mt-10 w-285 flex flex-col'>


            {/* <h1 className='text-lg ml-9 lg:mb-4'>Change Password</h1> */}

            <div className='border-b-1 pl-6 flex flex-row items-center'>
            <PageName name={(router.query.name === undefined)?"Payment method":router.query.name} />
            </div>
            <div className='flex flex-row lg:h-full lg:border-1 p-9'>

                {/* <div className='flex flex-row'> */}
                    <span className='w-100 h-14 px-4 bg-listBar flex flex-row justify-between items-center border-1 rounded-md border-neutral-300'>
                        <span className='text-sm'>Saved bkash account</span>
                        <span className='text-sm text-gray-400 font-medium'>01444455986</span>
                    </span>

                    <button className='h-14'><Image src={bin} alt="" className="ml-4" /></button>
                {/* </div> */}
                


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