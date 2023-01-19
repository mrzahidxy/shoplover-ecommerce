import React from 'react'
import left_arrow from "../../public/Nahin/icons/left_arrow.svg"
import Image from 'next/image'
import { useRouter } from 'next/router'


const PageName = ({name}) => {
    const router = useRouter()
    return (
        <div className=' text-lg flex'>
            <button onClick={() => { router.back() }}><Image src={left_arrow} className="mr-3 lg:hidden " alt=''/></button>
            <h1 className='text-xl font-normal'>{name}</h1>
        </div>
    )
}

export default PageName