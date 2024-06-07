import React from 'react'
import HeaderNavigation from '../Components/HeaderNavigation'
import closeicon from '../Assets/Close.png'
import rings from '../Assets/Rings.svg'
import TasksPriorities from '../Components/TasksPriorities'
import ActivityFeed from '../Components/ActivityFeed'
import Tasks from '../Components/Tasks'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [rows, setRows] = useState([]);

    const getTasks = () => {
      axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
          .then(response => {
              setRows(response?.data);
          })
          .catch(error => {
              console.log(error);
          });
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
      <div className='flex flex-col gap-y-[24px] overflow-auto'>
        <HeaderNavigation />
        
        <div className='flex flex-row mx-[24px] bg-white rounded-[8px] h-[120px] shadow-md border-[1px] px-[16px] justify-between'>
          <div className='flex flex-col items-start justify-start pt-[16px]'>
              <h3 className='font-inter text-[24px] font-semibold'>Welcome back, John Doe</h3>
              <p className='font-inter text-[14px]'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
              <a href="your_url_here" className='font-inter text-[14px] text-[#BC006D] underline'>Look here for more information</a>
          </div>
          <div className='flex flex-row gap-x-5'>
              <img 
                  src={rings}
                  alt='rings'
                  className='w-[167px] h-[120px] '
              />
          
              <img 
                  src={closeicon}
                  alt='close icon'
                  className='w-[24px] h-[24px] cursor-pointer mt-[16px]' 
              />
          </div>
        </div>

        <div className='flex flex-row mx-[24px] justify-between'>
          <Tasks tasks={rows}/>
          <div className='flex flex-col gap-y-[18px]'>
            <TasksPriorities tasks={rows}/>
            <ActivityFeed  />
          </div>
        </div>
        
      </div>
    )
}

export default Dashboard
