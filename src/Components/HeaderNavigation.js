import React from 'react'
import profilepic from '../Assets/Ellipse 6.png'
import bell from '../Assets/Bell-off.svg'
import menuicon from '../Assets/Chevron-down.png'

const Header_Navigation = () => {
  return (
    <div className='flex h-[80px] bg-white shadow-md items-center justify-between px-[24px] flex-row sm:flex-row'>
      <h4 className='font-inter text-black text-[20px] font-semibold'>Dashboard</h4>
      <div className='flex flex-row items-center justify-between gap-x-5'>
        <img 
            src={bell} 
            alt='bell icon'
            className='h-[24px] w-[24px] cursor-pointer ' 
        />
        <div className='flex flex-row justify-between w-[72px] items-center'>
            <img 
                src={profilepic} 
                alt='profile'
                className='h-[40px] w-[40px] ' 
            />
            <img 
                src={menuicon} 
                alt='menu icon'
                className='h-[24px] w-[24px] cursor-pointer ' 
            />
        </div>
      </div>
    </div>
  )
}

export default Header_Navigation