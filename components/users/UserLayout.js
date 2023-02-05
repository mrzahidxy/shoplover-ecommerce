import React from 'react'
import ProfileNav from './ProfileNav'


const UserLayout = ({ children }) => {
  return (
    // <div className='container flex flex-col lg:flex-row xl:justify-center bg-white lg:bg-[#F6F6F6]'>
    // <div className='container flex flex-col lg:flex-row justify-center bg-white lg:bg-[#F6F6F6]'>
    //     <ProfileNav />
    //     {children}
    // </div>

    <div className='container grid grid-cols-1 xl:grid-cols-userlayout justify-center bg-white lg:bg-[#F6F6F6]'>

      <ProfileNav />
      {children}

    </div>
  )
}

export default UserLayout