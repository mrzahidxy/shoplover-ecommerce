import React from 'react'
import ProfileNav from './ProfileNav'


const UserLayout = ({children}) => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-center bg-[#F6F6F6]'>
        <ProfileNav />
        {children}
    </div>
  )
}

export default UserLayout