import React, { useState } from 'react';
import dashboard from '../Assets/Dashboard.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const SidebarNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      path: '/',
      submenu: false,
      submenuitems: [],
    },
  ];

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden sm:flex w-[272px] h-[100vh] bg-[#33074F] flex-col">
        <div className="w-[272px] h-[80px] bg-bg-opacity bg-[#EBE6ED] justify-center items-center flex">
          <h3 className="text-white font-semibold font-inter text-[24px]">Acmy Solutions</h3>
        </div>
        <ul className="flex flex-col mt-[60px] ml-[16px]">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <li className="bg-bg-opacity bg-[#EBE6ED] rounded-3xl w-[240px] h-[40px] flex items-center flex-row gap-x-[8px] pl-[12px] hover:bg-purple-600 cursor-pointer mb-5">
                {item.icon === 'dashboard' && (
                  <img
                    src={dashboard}
                    alt="dashboard"
                    className="w-[24px] h-[24px] mr-[10px]"
                  />
                )}
                <span className="text-lg text-white font-inter-regular">{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Top navigation for smaller screens */}
      <div className="flex sm:hidden w-full bg-[#33074F] flex-col">
        <div className="w-full h-[80px] bg-bg-opacity bg-[#EBE6ED] flex justify-between items-center px-4 relative">
          <h3 className="text-white font-semibold font-inter text-[24px]">Acmy Solutions</h3>
          <button onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon style={{ color: 'white' }} />
          </button>
          {isOpen && (
            <ul className="absolute z-10 rounded-lg shadow-lg right-4 top-16 ">
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index}>
                  <div className='bg-[#33074F] flex flex-col justify-center p-2 '>
                    <li className="flex items-center flex-row gap-x-[8px] pl-[12px] pr-[12px] py-[8px] hover:bg-purple-600 cursor-pointer bg-bg-opacity bg-[#EBE6ED] hover:rounded-3xl rounded-3xl">
                      {item.icon === 'dashboard' && (
                        <img
                          src={dashboard}
                          alt="dashboard"
                          className="w-[24px] h-[24px] mr-[10px]"
                        />
                      )}
                      <span className="text-lg text-[#33074F] font-inter-regular">{item.title}</span>
                    </li>
                  </div>
                  
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarNavigation;
