import React from 'react'
import ProfileNav from './ProfileNav'


const UserLayout = ({ children }) => {
  return (
    <div className='container flex flex-col lg:flex-row justify-center bg-white lg:bg-[#F6F6F6]'>
        <span className=' hidden xl:flex'><ProfileNav /></span>
        {children}
    </div>

    // <div className='container grid  justify-center bg-white lg:bg-[#F6F6F6] shrink'>

    //   <ProfileNav />
    //   <div>
    //   {children}

    //   </div>

    // </div>
  )
}

export default UserLayout