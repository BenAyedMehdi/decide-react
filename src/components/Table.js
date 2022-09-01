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
      pros.sort((a,b) =>{
        return b.value- a.value
      })
      cons.sort((a,b) =>{
        return b.value- a.value
      })
        const maxLength = pros.length > cons.length ? pros.length : cons.length
        let arr = []
        for(let i = 0 ; i< maxLength ; i++){
            let row = []
            const prosValue = pros[i]? pros[i].value : ''
            const prosItem = pros[i]? pros[i].reason : ''
            const consItem = cons[i]? cons[i].reason : ''
            const consValue = cons[i]? cons[i].value : ''
            row.push(prosValue)
            row.push(prosItem)
            row.push(consItem)
            row.push(consValue)
            arr.push(row)
        }
        return arr
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor:'#32CD32', color: 'white',}}>Pros</TableCell>
            <TableCell style={{backgroundColor:'#32CD32',width:'50px', border:"5px solid rgba(224, 224, 224, 1)"}} size='small'>Value</TableCell>
            <TableCell style={{backgroundColor:'#FF4500',width:'50px', border:"5px solid rgba(224, 224, 224, 1)"}} size='small' align="right">Value</TableCell>
            <TableCell style={{backgroundColor:'#FF4500', color: 'white',}} align="right">Cons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createElements(pros,cons).map((row, index) => (
            <TableRow
            border= "1"
            margin = "5"
              hover
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              { row[0]==5 &&  <TableCell style={{backgroundColor:"#FF8C00"}}  component="th" scope="row">{row[1]}</TableCell>}
              { row[0]==3 && <TableCell style={{backgroundColor:"#FFDAB9"}}  component="th" scope="row">{row[1]}</TableCell>}
              { row[0]==1 &&  <TableCell component="th" scope="row">{row[1]}</TableCell>}
              { !row[0] &&  <TableCell component="th" scope="row"> </TableCell>}
              
              <TableCell style={{border:"5px solid rgba(224, 224, 224, 1)"}} component="th" scope="row"> {row[0]}</TableCell>
              
              <TableCell style={{border:"5px solid rgba(224, 224, 224, 1)"}} align="right">{row[3]}</TableCell>
              { row[3]==5 &&  <TableCell style={{backgroundColor:"#FF8C00"}}  component="th" scope="row">{row[2]}</TableCell>}
              { row[3]==3 && <TableCell style={{backgroundColor:"#FFDAB9"}}  component="th" scope="row">{row[2]}</TableCell>}
              { row[3]==1 &&  <TableCell component="th" scope="row">{row[2]}</TableCell>}
              { !row[3] &&  <TableCell component="th" scope="row"></TableCell>}
              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
