import React from 'react'
import left_arrow from "../../public/Nahin/icons/left_arrow.svg"
import Image from 'next/image'
import { useRouter } from 'next/router'


const PageName = ({name}) => {
    const router = useRouter()
    return (
        <div className=' text-lg flex flex-row my-3'>
            <button onClick={() => { router.back() }}><Image src={left_arrow} className="mr-3 lg:hidden" alt=''/></button>
            <span className='text-xl font-normal'>{name}</span>
        </div>
    )
}

export default PageName