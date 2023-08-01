import AdminDashboardSidebar from '@/Components/AdminDashboardSidebar'
import UserDashboardNav from '@/Components/UserDashboardNav'
import React from 'react'
import { Helmet } from 'react-helmet'

const AuthAdminLayout = ({ user, header, children }) => {
  return (
    <body>
      <div class="main-wrapper">
        <UserDashboardNav user={user} />
        <AdminDashboardSidebar />
        <main>
          {children}
        </main>
      </div>
      <Helmet>
        {/* <link rel="stylesheet" href="/user-dashboard-assets/css/bootstrap.min.css"/>

        <link rel="stylesheet" href="/user-dashboard-assets/css/font-awesome.min.css"/>

        <link rel="stylesheet" href="/user-dashboard-assets/css/feathericon.min.css"/>
        <link rel="stylesheet" href="/user-dashboard-assets/plugins/morris/morris.css"/> */}

        {/* <link rel="stylesheet" href="/user-dashboard-assets/css/custom.css"/> */}

        <script src="/user-dashboard-assets/js/jquery-3.6.4.min.js"></script>

        <script src="/user-dashboard-assets/js/bootstrap.bundle.min.js"></script>

        <script src="/user-dashboard-assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
        <script src="/user-dashboard-assets/plugins/raphael/raphael.min.js"></script>
        <script src="/user-dashboard-assets/plugins/morris/morris.min.js"></script>
        <script src="/user-dashboard-assets/js/chart.morris.js"></script>

        <script src="/user-dashboard-assets/js/script.js"></script>

        <script src="/user-dashboard-assets/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="/user-dashboard-assets/plugins/datatables/datatables.min.js"></script>
      </Helmet>
    </body>
  )
}

export default AuthAdminLayout