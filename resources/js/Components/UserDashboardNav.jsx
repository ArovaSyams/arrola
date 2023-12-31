import { Link } from '@inertiajs/react'
import React from 'react'

const UserDashboardNav = ({ user }) => {

  return (
    <div className="header">

    <div className="header-left">
    <a href="/dashboard" className="logo">
    <img src="/user-dashboard-assets/img/logo.png" alt="Logo" />
    </a>
    <a href="/dashboard" className="logo logo-small">
    <img src="/user-dashboard-assets/img/logo-small.png" alt="Logo" width="30" height="30" />
    </a>
    </div>

    {/* <a href="javascript:void(0);" id="toggle_btn">
    <i className="fe fe-text-align-left"></i>
    </a> */}


    <a className="mobile_btn" id="mobile_btn">
    <i className="fa fa-bars"></i>
    </a>


    <ul className="nav user-menu">


    <li className="nav-item dropdown has-arrow">
    <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
    <span className="user-img"><img style={{ width: 40,height: 40, objectFit: 'cover', borderRadius: 100 }} src={`/storage/${user.image}`} width="31" alt="Ryan Taylor" /></span>
    </a>
    <div className="dropdown-menu">
    <div className="user-header">
    <div className="avatar avatar-sm">
    <img src={`/storage/${user.image}`} alt="User Image" style={{ width: 35,height: 35, objectFit: 'cover', borderRadius: 100 }} className="avatar-img " />
    </div>
    <div className="user-text">
    <h6>{user.first_name} {user.last_name}</h6>
    {/* <p className="text-muted mb-0">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p> */}
    <p className="text-muted mb-0">{user.role}</p>
    </div>
    </div>
    <Link className="dropdown-item" href={`/profile`}>My Profile</Link>
    <Link method="post" className="dropdown-item" href="/logout">Logout</Link>
    </div>
    </li>

    </ul>

    </div>
  )
}

export default UserDashboardNav