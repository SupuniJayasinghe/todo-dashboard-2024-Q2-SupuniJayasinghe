import React from 'react'
import Header_Navigation from '../Components/Header_Navigation'
import closeicon from '../Assets/Close.png'
import rings from '../Assets/Rings.svg'
import Tasks_Priorities from '../Components/Tasks_Priorities'
import Activity_Feed from '../Components/Activity_Feed'
import Tasks from '../Components/Tasks'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-y-[24px] overflow-auto'>
      <Header_Navigation />
      
      <div className='flex flex-row mx-[24px] bg-white rounded-[8px] h-[120px] shadow-md border-[1px] px-[16px] justify-between'>
        <div className='flex flex-col items-start justify-start pt-[16px]'>
            <h3 className='font-inter text-[24px] font-semibold'>Welcome back, John Doe</h3>
            <p className='font-inter text-[14px]'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
            <a href="your_url_here" className='font-inter text-[14px] text-[#BC006D] underline'>Look here for more information</a>
        </div>
        <div className='flex flex-row gap-x-5'>
            <img 
                src={rings}
                className='w-[167px] h-[120px] '
            />
        
            <img 
                src={closeicon}
                className='w-[24px] h-[24px] cursor-pointer mt-[16px]' 
            />
        </div>
      </div>

      <div className='flex flex-row mx-[24px] justify-between'>
        <Tasks />
        <div className='flex flex-col gap-y-[18px]'>
          <Tasks_Priorities />
          <Activity_Feed  />
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
