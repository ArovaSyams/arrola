import AuthAdminLayout from '@/Layouts/AuthAdminLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const AdminDashboard = ({ receipts, user, users, auth }) => {
  const [reload, setReload] = useState(true);
  useEffect(() => {
    const reload = () => {
      if (reload === true) {
        location.reload();
      }
      setReload(false);
      return;
    }
    reload();
  }, [reload])
  


  return (
    <AuthAdminLayout user={auth}>
      <Head title='Admin Dashboard' />
      <div class="page-wrapper">
      <div class="content container-fluid">

      <div class="page-header">
      <div class="row">
      <div class="col-sm-12">
      <h3 class="page-title">Welcome {auth.first_name}</h3>
      <ul class="breadcrumb">
      <li class="breadcrumb-item active">Dashboard</li>
      </ul>
      </div>
      </div>
      </div>

      <div class="row">

      <div class="col-xl-3 col-sm-6 col-12">
      <div class="card">
      <div class="card-body">
      <div class="dash-widget-header">
      <span class="dash-widget-icon text-primary border-primary">
      <i class="fe fe-users"></i>
      </span>
      <div class="dash-count">
      <a href="/user-list"><h3>{users}</h3></a>
      </div>
      </div>
      <div class="dash-widget-info">
      <h6 class="text-muted">Users</h6>
      <div class="progress progress-sm">
      <div class="progress-bar bg-primary w-50"></div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div class="col-xl-3 col-sm-6 col-12">
      <div class="card">
      <div class="card-body">
      <div class="dash-widget-header">
      <span class="dash-widget-icon text-success">
      <i class="fe fe-credit-card"></i>
      </span>
      <div class="dash-count">
      <a href="/receipt-request"><h3>{receipts}</h3></a>
      </div>
      </div>
      <div class="dash-widget-info">
      <h6 class="text-muted">Recipes</h6>
      <div class="progress progress-sm">
      <div class="progress-bar bg-success w-50"></div>
      </div>
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

export default AdminDashboard