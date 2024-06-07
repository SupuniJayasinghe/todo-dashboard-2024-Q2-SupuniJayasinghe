import React, { useEffect, useState } from 'react';
import HeaderNavigation from '../Components/HeaderNavigation';
import closeicon from '../Assets/Close.png';
import rings from '../Assets/Rings.svg';
import TasksPriorities from '../Components/TasksPriorities';
import ActivityFeed from '../Components/ActivityFeed';
import Tasks from '../Components/Tasks';
import axios from 'axios';

const Dashboard = () => {
    const [rows, setRows] = useState([]);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

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

    const handleCloseClick = () => {
        setShowWelcomeMessage(false);
    }

    return (
        <div className='flex flex-col gap-y-[24px] overflow-auto'>
            <HeaderNavigation />
            {showWelcomeMessage && (
                <div className='relative flex flex-col md:flex-row mx-[24px] bg-white rounded-[8px] h-auto md:h-[120px] shadow-md border-[1px] px-[16px] justify-between'>
                    <div className='flex flex-col items-start justify-start pt-[16px]'>
                        <h3 className='font-inter text-[24px] font-semibold'>Welcome back, John Doe</h3>
                        <p className='font-inter text-[14px]'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
                        <a href="your_url_here" className='font-inter text-[14px] text-[#BC006D] underline'>Look here for more information</a>
                    </div>
                    <div className='flex flex-row mt-4 gap-x-5 md:mt-0'>
                        <img 
                            src={rings}
                            alt='rings'
                            className='w-[167px] h-[120px]'
                        />
                    </div>
                    <img 
                        src={closeicon}
                        alt='close icon'
                        className='absolute top-0 right-4 md:relative md:top-0 md:right-0 w-[24px] h-[24px] cursor-pointer mt-[16px]' 
                        onClick={handleCloseClick}
                    />
                </div>
            )}

            <div className='flex flex-col md:flex-row mx-[24px] justify-between gap-4'>
                <Tasks tasks={rows} className='w-full md:w-2/3'/>
                <div className='flex flex-col gap-y-[18px] w-full md:w-[440px] '>
                    <TasksPriorities tasks={rows} />
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
