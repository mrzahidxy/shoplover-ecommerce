import React, { useState } from 'react'
import { useRouter } from 'next/router'

import english from "../../public/Nahin/icons/english.svg";
import bangla from "../../public/Nahin/icons/bangla.svg";
import check from "../../public/Nahin/icons/check.svg";

import PageName from '../../components/users/pageName'


import Image from 'next/image';

const changeLanguage = () => {

    const router = useRouter();

    const [English, setEnglish] = useState(`opacity-0`);
    const [Bangla, setBangla] = useState(`opacity-1`);

    return (
        <div className='flex flex-col p-8 bg-white mt-10 rounded-sm'>
                        <PageName name={router.query.name} />

            <div className='flex flex-col w-88'>
                <button className='flex flex-row items-center w-80 h-11 p-1 border-2 border-neutral-100 rounded-md bg-neutral-50 mt-5'
                    onClick={()=>{
                        setBangla("opacity-0")
                        setEnglish("opacity-1")
                    }}
                >
                    <Image src={check} className={`w-5 h-5 mx-2 ${English}`} alt=''/>
                    <Image src={english} className="w-5 h-5 mx-2 rounded-full" alt=''/>
                    English
                </button>
                <button className='flex flex-row items-center w-80 h-11 p-1 border-2 border-neutral-100 rounded-md bg-neutral-50 mt-5'
                    onClick={()=>{
                        setBangla("opacity-1")
                        setEnglish("opacity-0")
                    }}
                >
                <Image src={check} alt='' className={`w-5 h-5 mx-2 ${Bangla}`}/>
                    <Image src={bangla} alt='' className="w-5 h-5 mx-2 rounded-full"/>
                    Bangla
                </button>
            </div>

        </div>
    )
}

export default changeLanguage

changeLanguage.getLayout = function PageLayout(page) {
    return (
        <>{page}</>
    )
}