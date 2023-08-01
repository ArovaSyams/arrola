import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head, Link } from '@inertiajs/react';
import { Helmet } from 'react-helmet';
import UserDashboardNav from '@/Components/UserDashboardNav';
import UserDashboardSidebar from '@/Components/UserDashboardSidebar';

const AuthenticatedLayout = ({ user, header, children }) => {
  // console.log(user.first_name);
  return (
    <>
      <div class="main-wrapper">
        <UserDashboardNav user={user} />
        <UserDashboardSidebar />
        <main>
          {children}
        </main>
      </div>

      <Helmet>
        <script src="/user-dashboard-assets/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="/user-dashboard-assets/plugins/datatables/datatables.min.js"></script>
        {/* <script src="/user-dashboard-assets/plugins/datatables/datatables.min.css"></script> */}
        <script src="/user-dashboard-assets/js/script.js"></script>
        <script src="/user-dashboard-assets/js/jquery-3.6.4.min.js"></script>
        {/* <script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script> */}
        <script src="/user-dashboard-assets/js/bootstrap.bundle.min.js"></script>

        <script src="/user-dashboard-assets/js/chart.morris.js"></script>

        <script src="/user-dashboard-assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
        <script src="/user-dashboard-assets/plugins/raphael/raphael.min.js"></script>
        <script src="/user-dashboard-assets/plugins/morris/morris.min.js"></script>

      </Helmet>
      {/* <link rel="stylesheet" href="/user-dashboard-assets/css/bootstrap.min.css"/> */}

      {/* <link rel="stylesheet" href="/user-dashboard-assets/css/font-awesome.min.css"/> */}

      {/* <link rel="stylesheet" href="/user-dashboard-assets/css/feathericon.min.css"/> */}
      {/* <link rel="stylesheet" href="/user-dashboard-assets/plugins/morris/morris.css"/> */}

      {/* <link rel="stylesheet" href="/user-dashboard-assets/css/custom.css"/> */}

    </>
  )
}

export default AuthenticatedLayout