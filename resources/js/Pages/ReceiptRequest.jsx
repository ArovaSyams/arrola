import AuthAdminLayout from '@/Layouts/AuthAdminLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const ReceiptRequest = ({ receipts, users, auth }) => {
  return (
    <AuthAdminLayout user={auth}>
      <Head title="Recipe Request" />

      <div class="page-wrapper">
      <div class="content container-fluid">

      <div class="page-header">
      <div class="row">
      <div class="col-sm-7 col-auto">
      <h3 class="page-title">Recipe Requests</h3>
      <ul class="breadcrumb">
      <li class="breadcrumb-item active">Doccure</li>
      </ul>
      </div>
      <div class="col-sm-5 col">

      </div>
      </div>
      </div>

      <div class="row">
      <div class="col-md-12">

      <div class="card">
      <div class="card-body">
      <div class="table-responsive">
      <table class="datatable table table-hover table-center mb-0">
      <thead>
      <tr>
      <th>User Name</th>
      <th>Recipe Name</th>
      <th>Posted Date</th>
      <th>Approved Date</th>
      <th>Approved By</th>
      <th>Status</th>
      <th>View</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {receipts.map((receipt) => (
        <tr>
        {users.map((user) => (
          <>
          {receipt.user_id === user.id && (
          <td>
            <h2 class="table-avatar">
            <a href={`/profile/${user.id}`} class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src={`/storage/${user.image}`} alt="User Image" /></a>
            <a href={`/profile/${user.id}`}>{user.first_name} {user.last_name}</a>
            </h2>
          </td>
          )}
          </>
      ))}
      <td>{receipt.name}</td>
      <td>{new Date(receipt.created_at).toLocaleDateString()}</td>
      <td>{receipt.approved_at && new Date(receipt.approved_at).toLocaleDateString()}</td>
      <td>{receipt.approved_by}</td>
      <td>{receipt.status}</td>
      <td>
        <Link href={`/receipt/${receipt.name.split(' ').join('-')}`} class="btn btn-sm bg-primary-light">View</Link>
      </td>
      <td>
      <Link method="post" href={`/approve-receipt/${receipt.unique_id}`} class="btn btn-sm bg-primary-light">
        {receipt.status === 'Inactive' ? 'Approve' : 'Unaprove'}
      </Link>
      {/* <a data-bs-toggle="modal" href="#update_recipe" class="btn btn-sm bg-primary-light">
      <i class="fe fe-pencil"></i> Update
      </a> */}
      </td>
      </tr>
      ))}

      </tbody>
      </table>
      </div>
      </div>
      </div>

      </div>
      </div>

      </div>
      </div>  
    </AuthAdminLayout>
  )
}

export default ReceiptRequest