import AuthAdminLayout from '@/Layouts/AuthAdminLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const UserList = ({ users, auth }) => {
  return (
    <AuthAdminLayout user={auth}>
      <Head title="User List" />
      <div class="page-wrapper">
      <div class="content container-fluid">

      <div class="page-header">
      <div class="row">
      <div class="col-sm-7 col-auto">
      <h3 class="page-title">User List</h3>
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
      <th>Full Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Joined Date</th>
      </tr>
      </thead>
      <tbody>
      {users.map((user) => (
      <tr>
      <td>
      <h2 class="table-avatar">
      <a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src={`/storage/${user.image}`} alt="User Image" /></a>
      <Link href={`/profile/${user.id}`}>{user.first_name} {user.last_name}</Link>
      </h2>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{new Date(user.created_at).toLocaleDateString()}</td>
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

export default UserList