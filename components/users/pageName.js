import React from 'react'
import left_arrow from "../../public/Nahin/icons/left_arrow.svg"
import Image from 'next/image'


const PageName = ({name}) => {
    return (
        <div className=' text-lg ml-9 lg:mb-4 flex'>
            <button onClick={() => { router.back() }}><Image src={left_arrow} className="mr-3 lg:hidden " alt=''/></button>
            <h1 className='text-xl font-normal'>{name}</h1>
        </div>
    )
}

export default PageName