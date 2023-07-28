import { Link } from '@inertiajs/react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const AdminDashboard = ({ receipts }) => {
  return (
    <div className="p-16 max-w-full" style={{ padding: 60 }}>
        <h1>Admin Receipt Data</h1>
        <Link href="/logout" method="post">Logout</Link>
        <br />
        {/* <Link href="/create-receipt">Create Receipt</Link> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left" style={{ width: 120 }}>Approved By</TableCell>
                <TableCell align="left">Approval</TableCell>
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
                  <TableCell align="left">{row.approved_by}</TableCell>
                  <TableCell align="left" className="w-40">
                      <Link method="post" href={`/approve-receipt/${row.unique_id}`}>
                        {row.status === 'Inactive' ? 'Approve' : 'Unaprove'}
                      </Link>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default AdminDashboard