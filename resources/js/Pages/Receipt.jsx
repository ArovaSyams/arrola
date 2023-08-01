import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Receipt = ({ receipts, auth }) => {
  return (
    <AuthenticatedLayout user={auth}>
      <Head title='Receipt' />
      <div className="page-wrapper">
      <div className="content container-fluid">

      <div className="page-header">
      <div className="row">
      <div className="col-sm-7 col-auto">
      <h3 className="page-title">My Recipes</h3>
      <ul className="breadcrumb">
      <li className="breadcrumb-item active">Doccure</li>
      </ul>
      </div>
      <div className="col-sm-5 col">
      <a href="/create-receipt" className="btn btn-primary float-end mt-2">Add New Recipe</a>
      </div>
      </div>
      </div>

      <div className="row">
      <div className="col-sm-12">
      <div className="card">
      <div className="card-body">
      <div className="table-responsive">
      <table className="datatable table table-hover table-center mb-0">
      <thead>
      <tr>
      <th>Recipe Name</th>
      <th>Category</th>
      <th>Status</th>
      <th className="text-end">Actions</th>
      </tr>
      </thead>
      <tbody>
        {receipts.map((receipt) => (
        <tr key={receipt.key}>
          <td>{receipt.name}</td>
          <td>{receipt.category}</td>
          <td>{receipt.status}</td>
          <td className="text-end">
            <div className="actions">
              <Link href={`/receipt/${receipt.name.split(' ').join('-')}/edit`} className="btn btn-sm bg-success-light" >
              <i className="fe fe-pencil"></i> Edit
              </Link>
              <Link href={`/receipt/${receipt.unique_id}`} as="button" method="delete" className="btn btn-sm bg-danger-light" data-bs-toggle="modal">
              <i className="fe fe-trash"></i> Delete
              </Link>
            </div>
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
    </AuthenticatedLayout>
  )
}

export default Receipt