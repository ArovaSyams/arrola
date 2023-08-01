
import { Link } from '@inertiajs/react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Dashboard = ({ receipts }) => {

  return (
    <div className="p-16 max-w-full" style={{ padding: 60 }}>
        <h1>Receipt Data</h1>
        <Link href="/logout" method="post">Logout</Link>
        <br />
        <Link href="/create-receipt">Create Receipt</Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {receipts.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.description.substring(0, 200)}</TableCell>
                  <TableCell align="left" >
                    <p className={` text-bold ${row.status === 'Inactive' ? 'text-red-500' : 'text-green-500'}`}>
                    {row.status}
                    </p>
                  </TableCell>
                  <TableCell align="left" className="w-40">
                      <Link className="text-green-500 mr-1" href={`/receipt/${row.name.split(' ').join('-')}`}>Show</Link>
                      <Link className="text-yellow-500 mr-1" href={`/receipt/${row.unique_id}/edit`}>Edit</Link>
                      <Link className="text-red-500" href={`/receipt/${row.unique_id}`} as="button" method="delete">Delete</Link>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Dashboard