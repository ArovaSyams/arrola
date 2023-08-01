import React, { useEffect, useState } from 'react'

const UserDashboardSidebar = () => {
  const location = window.location; // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
    <div id="sidebar-menu" className="sidebar-menu">
    <ul>
    <li className="menu-title">
    <span>Main</span>
    </li>
    <li className={'/dashboard' === url ? 'active' : ''}>
    <a href="/dashboard"><i className="fe fe-home"></i> <span>Dashboard</span></a>
    </li>
    <li className={'/receipt' === url ? 'active' : ''}>
    <a href="/receipt"><i className="fe fe-layout"></i> <span>My Recipes</span></a>
    </li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default UserDashboardSidebar