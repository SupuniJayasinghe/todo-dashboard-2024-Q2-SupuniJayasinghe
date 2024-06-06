import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import inprogress from '../Assets/inprogress.svg'
import completed from '../Assets/done.svg'

const Tasks = () => {
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);

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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const TodoCell = ({ todo, completed }) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {todo}
            {!completed && (
                <button 
                    onClick={() => {}}
                    className='text-pink-500 font-inter text-[10px] items-start cursor-pointer flex '
                > 
                    Mark as done
                </button>
            )}
        </div>
    );

    return (
        <div className='h-[632px] w-[656px] bg-white shadow-md flex flex-col border rounded-[8px]'>
            <div className='sticky top-0 z-10 h-[60px] flex flex-col justify-center items-start bg-white'>
                <p className="text-black text-[16px] font-inter font-semibold ml-[12px]">Tasks</p>
            </div>
            <hr className="border-[#E4E7EC] mt-2 w-[656px]" />
            <TableContainer component={Paper} sx={{ maxHeight: '620px', overflow: 'auto' }}>
    {/* Adjust the height as needed */}
    <Table sx={{ minWidth: 650, border: 0 }} aria-label="simple table">
        <TableHead>
            <TableRow className='bg-[#F2F2F2]' sx={{ height: '40px' }}>
                <TableCell align='center' sx={{ fontSize: '12px', fontFamily: 'Inter' }}>Status</TableCell>
                <TableCell align='left' sx={{ fontSize: '12px', fontFamily: 'Inter', padding: '2px' }}>Task Name</TableCell>
                <TableCell align='left' sx={{ fontSize: '12px', fontFamily: 'Inter', padding: '2px' }}>Created by</TableCell>
                <TableCell align='center' sx={{ fontSize: '12px', fontFamily: 'Inter', padding: '2px' }}>Priority</TableCell>
                <TableCell align='center' sx={{ fontSize: '12px', fontFamily: 'Inter' }}>Date</TableCell>
            </TableRow>
        </TableHead>
                <TableBody>
                {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                ).map((row, index) => (
                    <TableRow
                    key={row.id || index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell 
                        component="th" 
                        scope="row" 
                        align='center'
                        sx={{ fontSize: '12px', padding: '16px' }} // Adjust the padding value as needed
                    >
                        {row.completed ? 
                            <img src={completed} alt="Done" width="20" height="20" /> : 
                            <img src={inprogress} alt="In Progress" width="20" height="20" />
                        }
                    </TableCell>
                    <TableCell sx={{ fontSize: '10px', fontFamily: 'Inter', padding: '2px' }}>
                    <TodoCell todo={row.todo} completed={row.completed} />
                    </TableCell>              
                    <TableCell sx={{ fontSize: '10px', fontFamily: 'Inter', padding: '2px' }}>{row.createdBy}</TableCell>
                    <TableCell sx={{ fontSize: '10px', fontFamily: 'Inter', padding: '2px' }} align='center'>
                        <Box sx={{ 
                            backgroundColor: row.priority === 'HIGH' ? 'rgba(235, 87, 87, 0.1)' : row.priority === 'MEDIUM' ? 'rgba(242, 201, 76, 0.1)' : 'rgba(47, 128, 237, 0.1)', 
                            color: row.priority === 'HIGH' ? '#EB5757' : row.priority === 'MEDIUM' ? '#F2C94C' : '#2F80ED',  
                            padding: '2px 8px 2px 8px', 
                            borderRadius: '16px',
                        }}>
                            {row.priority.toLowerCase()}
                        </Box>
                    </TableCell>
                    <TableCell sx={{ fontSize: '10px', fontFamily: 'Inter' ,color:'#757575'}}>
                        {new Date(row.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop:'20px' }}>
                <Pagination count={Math.ceil(rows.length / rowsPerPage)} page={page + 1} onChange={handleChangePage} shape="rounded" />
            </Box>
        </div>
    )
}

export default Tasks