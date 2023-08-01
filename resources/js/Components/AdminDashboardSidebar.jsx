import React, { useEffect, useState } from 'react'

const AdminDashboardSidebar = () => {
  const location = window.location; // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
    <div id="sidebar-menu" class="sidebar-menu">
    <ul>
    <li class="menu-title">
    <span>Main</span>
    </li>
    <li class={'/admin-dashboard' === url && 'active'}>
    <a href="/admin-dashboard"><i class="fe fe-home"></i> <span>Dashboard</span></a>
    </li>
    <li class={'/receipt-request' === url && 'active'}>
    <a href="/receipt-request"><i class="fe fe-layout"></i> <span>Recipe Requests</span></a>
    </li>
    <li class={'/user-list' === url && 'active'}>
    <a href="/user-list"><i class="fe fe-layout"></i> <span>User List</span></a>
    </li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default AdminDashboardSidebar