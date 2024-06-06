import React from 'react'
import profilepic from '../Assets/Ellipse 9.svg'

const Activity_Feed = () => {
    const feeds = [
        { name: 'Hailey Garza', action: 'added new tags to', target: 'Ease Design Systems', time: 'Account | Friday, 10:03 AM' },
        { name: 'John Doe', action: 'commented on', target: 'Project X', time: 'Account | Friday, 9:30 AM' },
        { name: 'Jane Smith', action: 'created a new project', target: 'Project Y', time: 'Account | Friday, 8:45 AM' },
        { name: 'Hailey Garza', action: 'added new tags to', target: 'Ease Design Systems', time: 'Account | Friday, 10:03 AM' },
        { name: 'John Doe', action: 'commented on', target: 'Project X', time: 'Account | Friday, 9:30 AM' },
      ]

    return (
        <div className='relative h-[363px] w-[440px] bg-white shadow-md rounded-[8px]'>
            <div className='sticky top-0 z-10 h-[60px] flex flex-col justify-center items-start bg-white'>
                <p className="text-black text-[16px] font-inter font-semibold ml-[12px]">Activity Feed</p>
            </div>
            <hr className="border-[#E4E7EC] mt-2 w-[440px]" />

            <div className='overflow-y-auto h-[303px]'>
            {feeds.map((feed, index) => (
                <div key={index} className='flex flex-col p-2'>
                    <div className="flex items-center gap-2 my-[2px] h-[70px] p-5 ">
                        <img 
                            src={profilepic} 
                            alt="profile_image" 
                            className="w-8 h-8"
                        />
                        <div className='flex flex-col justify-start'>
                            <p className="text-black font-inter text-[14px] gap-2">
                                <span className="font-semibold p-1">{feed.name}</span>
                                <span className="text-black text-[14px] font-inter p-1">{feed.action}</span>
                                <a className='text-14px text-pink-500'>{feed.target}</a>
                            </p>
                            <p className="text-[#757575] text-[12px] font-inter leading-4">{feed.time}</p>
                        </div>
                    </div>
                    <hr className="border-[#E4E7EC] mt-2 w-full" />
                </div>
            ))}
            </div>
    </div>
)
}

export default Activity_Feed
