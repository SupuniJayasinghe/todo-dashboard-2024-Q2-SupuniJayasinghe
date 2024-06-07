import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js';

Chart.register(LinearScale, BarController, CategoryScale, BarElement);

const Tasks_Priorities = ({ tasks }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
  
      const priorities = tasks ? tasks.reduce((acc, task) => {
        acc[task.priority] = (acc[task.priority] || 0) + 1;
        return acc;
      }, {}) : {};
  
      //console.log(priorities);
  
      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['High', 'Medium', 'Low'],
          datasets: [{
            data: [priorities['HIGH'] || 0, priorities['MEDIUM'] || 0, priorities['LOW'] || 0],
            backgroundColor: [
              '#EB5757', // Change these to rgba colors
              '#F2C94C',
              '#2F80ED'
            ],
            borderColor: [
              '#EB5757', // Change these to rgba colors
              '#F2C94C',
              '#2F80ED'
            ],
            borderWidth: 0.5
          }]
        },
        options: {
          scales: {
            y: {
              display: false,
              max: Math.max(...Object.values(priorities))
            },
            x: {
              display: true
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true
              }
            }
          }
        }
      });
    }
  }, [tasks]);

  return (
    <div className='w-[440px] h-[253px] bg-white shadow-md rounded-[8px] flex flex-col border'>
        <div className='sticky top-0 z-10 h-[60px] flex flex-col justify-center items-start bg-white'>
            <p className="text-black text-[16px] font-inter font-semibold ml-[12px]">Tasks Priorities</p>
        </div>
        <hr className="border-[#E4E7EC] mt-2 w-[440px]" />     
        <div className="container m-auto mt-10 h-[300px] w-[250px]">
          <canvas ref={chartRef}></canvas>
        </div>
    </div>
  );
}

export default Tasks_Priorities;