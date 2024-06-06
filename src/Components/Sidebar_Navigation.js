import React from 'react'
import dashboard from '../Assets/Dashboard.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Sidebar_Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        path: '/',
        submenu:false,
        submenuitems:[]
    },
  ]


  return (
    <div className='w-[272px] h-[100vh] bg-[#33074F] flex flex-col'> 
      <div className='w-[272px] h-[80px] bg-bg-opacity bg-[#EBE6ED] fixed justify-center items-center flex'>
        <h3 className='text-white font-semibold font-inter text-[24px]'>Acmy Solutions</h3>
        <button className='sm:hidden' onClick={() => setIsOpen(!isOpen)}>
          <img src={MenuIcon} alt="menu" />
        </button>
      </div>
      <ul className={`flex flex-col mt-[140px] ml-[16px] ${isOpen ? 'block' : 'hidden'} sm:flex`}>
        {menuItems.map((item, index) => (
          <li key={index} className='bg-bg-opacity bg-[#EBE6ED] rounded-3xl w-[240px] h-[40px] flex  items-center flex-row gap-x-[8px] pl-[12px] hover:bg-purple-600 cursor-pointer'>
            {item.icon === 'dashboard' && (
              <img
                src={dashboard}
                alt='dashboard'
                className='w-[24px] h-[24px] mr-[10px]'
              />
            )}
           <span className='font-inter-regular text-white text-lg'>{item.title}</span> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar_Navigation
