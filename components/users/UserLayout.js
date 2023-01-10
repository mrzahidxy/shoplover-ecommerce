import React from 'react'
import ProfileNav from './ProfileNav'


const UserLayout = ({children}) => {
  return (
    <div className='flex flex-col m-4 lg:flex-row lg:justify-center lg:items-center'>
        <ProfileNav />
        {children}
    </div>
  )
}

export default UserLayout