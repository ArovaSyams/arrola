import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const Dashboard = ({ auth, count }) => {
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
    <AuthenticatedLayout user={auth}>
      <Head title='dashboard' />
      <div class="page-wrapper">
      <div class="content container-fluid">

      <div class="page-header">
      <div class="row">
      <div class="col-sm-12">
      <h3 class="page-title">Welcome {auth.first_name}!</h3>
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
      <span class="dash-widget-icon text-success">
      <i class="fe fe-credit-card"></i>
      </span>
      <div class="dash-count">
      <a href="/receipt"><h3>{count}</h3></a>
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
    </AuthenticatedLayout>
  )
}

export default Dashboard