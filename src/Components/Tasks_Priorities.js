import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js';

Chart.register(LinearScale, BarController, CategoryScale, BarElement);

const Tasks_Priorities = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['High', 'Medium', 'Low'],
          datasets: [{
            data: [12, 19, 3],
            backgroundColor: [
              'blue',
              'orange',
              'yellow'
            ],
            borderColor: [
              'blue',
              'orange',
              'yellow'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: false
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
  }, []);

  return (
    <div className='w-[440px] h-[253px] bg-white shadow-md rounded-[8px] flex flex-col'>
        <div className='sticky top-0 z-10 h-[60px] flex flex-col justify-center items-start bg-white'>
            <p className="text-black text-[16px] font-inter font-semibold ml-[12px]">Tasks Priorities</p>
        </div>
        <hr className="border-[#E4E7EC] mt-2 w-[440px]" />     
        <div className="container m-auto mt-10 h-[200px] w-[208px]">
            <canvas ref={chartRef}></canvas>
        </div>
    </div>
  );
}

export default Tasks_Priorities;