import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({pros, cons}) {

    const createElements = (pros, cons) =>{
        const maxLength = pros.length > cons.length ? pros.length : cons.length
        let arr = []
        for(let i = 0 ; i< maxLength ; i++){
            let row = []
            const prosItem = pros[i]? pros[i] : ''
            const consItem = cons[i]? cons[i] : ''
            row.push(prosItem)
            row.push(consItem)
            arr.push(row)
        }
        return arr
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pros</TableCell>
            <TableCell align="right">Cons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createElements(pros,cons).map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
