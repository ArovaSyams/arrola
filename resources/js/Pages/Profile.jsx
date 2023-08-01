import AuthAdminLayout from '@/Layouts/AuthAdminLayout'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import React from 'react'

const Profile = ({ user, auth }) => {

  const { data, setData, post, progress, errors } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    birth_date: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    image: ''
  });

  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/profile/${user.id}`)
    location.reload();
  }

  if(auth.role === 'user') {
    return (
      <AuthenticatedLayout user={auth}>
        <Head title={`${auth.first_name} Profile`} />
        <div class="page-wrapper">
        <div class="content container-fluid">
  
        <div class="page-header">
        <div class="row">
        <div class="col-sm-7 col-auto">
        {auth.id === user.id ? (
          <h3 class="page-title">My Profile</h3>
          ) : (
          <h3 class="page-title">{user.first_name} {user.last_name}'s Profile</h3>
        )}
        <ul class="breadcrumb">
        <li class="breadcrumb-item active"><br/></li>
        </ul>
        </div>
  
        <div class="row">
        <div class="col-md-12">
        <div class="profile-header">
        <div class="row align-items-center">
        <div class="col-auto ">
        {/* <a data-bs-toggle="modal" href="#edit_personal_details"> */}
        {/* <div style={{ width: 100, height:100, borderRadius: 100, backgroundColor: 'black' }}> */}
          <img class="image-full" style={{ objectFit:'cover', width: 100, height: 100, borderRadius: 100 }} alt="User Image" src={`/storage/${user.image}`} />
        {/* </div> */}
        {/* </a> */}
        </div>
        <div class="col ml-md-n2 profile-user-info">
        <h4 class="user-name mb-0">{user.first_name} {user.last_name}</h4>
        <h6 class="text-muted">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</h6>
        </div>
        {auth.id === user.id && (
        <div class="col-auto profile-btn">
        <a class="btn btn-primary" data-bs-toggle="modal" href="#edit_personal_details">
        Edit
        </a>
        </div>
        )}
        </div>
        </div>
  
        <div class="tab-content profile-tab-cont">
  
  
        <div class="row">
        <div class="col-lg-12">
        <div class="card">
        <div class="card-body">
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Full Name</p>
        <p class="col-sm-10">{user.first_name} {user.last_name}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
        <p class="col-sm-10">{!user.birth_date ? '-' : new Date(user.birth_date).toLocaleDateString()}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
        <p class="col-sm-10">{user.email}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
        <p class="col-sm-10">{user.phone}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0">Address</p>
        <p class="col-sm-10 mb-0">{user.address}<br />
        {user.city}<br />
        {user.state} - {user.zip_code},<br />
        {user.country}.</p>
        </div>
        </div>
        </div>
  
        <div class="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style={{ opacity: 1 }}>
        <div class="modal-header">
        <h5 class="modal-title">Personal Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form onSubmit={handleSubmit}>
        <div class="row form-row">
        
        <div class="col-12">
        <div class="form-group">
        <label>Photo profile</label>
        <input type="file" class="form-control" onChange={(e) => setData('image', e.target.files[0])} />
        </div>
        </div>
  
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} />
        </div>
        </div>
        <div class="col-12">
        <div class="form-group">
        <label>Date of Birth</label>
        <div class="cal-icon">
        <input type="date" class="form-control datetimepicker"  value={data.birth_date} onChange={(e) => setData('birth_date', e.target.value)}/>
        </div>
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Email ID</label>
        <input type="email" class="form-control" value={data.email} onChange={(e) => setData('email', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Mobile</label>
        <input type="text" value={data.phone} class="form-control" onChange={(e) => setData('phone', e.target.value)} />
        </div>
        </div>
        <div class="col-12">
        <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control" value={data.address} onChange={(e) => setData('address', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" value={data.city} onChange={(e) => setData('city', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>State</label>
        <input type="text" class="form-control" value={data.state} onChange={(e) => setData('state', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Zip Code</label>
        <input type="text" class="form-control" value={data.zip_code} onChange={(e) => setData('zip_code', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Country</label>
        <input type="text" class="form-control" value={data.country} onChange={(e) => setData('country', e.target.value)} />
        </div>
        </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">Save Changes</button>
        </form>
        </div>
        </div>
        </div>
        </div>
  
        </div>
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
  } if(auth.role === 'admin') {
    return (
      <AuthAdminLayout user={auth}>
        <Head title={`${auth.first_name} Profile`} />
        <div class="page-wrapper">
        <div class="content container-fluid">
  
        <div class="page-header">
        <div class="row">
        <div class="col-sm-7 col-auto">
        {auth.id === user.id ? (
          <h3 class="page-title">My Profile</h3>
          ) : (
          <h3 class="page-title">{user.first_name} {user.last_name}'s Profile</h3>
        )}
        <ul class="breadcrumb">
        <li class="breadcrumb-item active"><br/></li>
        </ul>
        </div>
  
        <div class="row">
        <div class="col-md-12">
        <div class="profile-header">
        <div class="row align-items-center">
        <div class="col-auto profile-image">
        {/* <a data-bs-toggle="modal" href="#edit_personal_details"> */}
          <img style={{ objectFit:'cover', width: 100, height: 100, borderRadius: 100 }} alt="User Image" src={`/storage/${user.image}`} />
        {/* </a> */}
        </div>
        <div class="col ml-md-n2 profile-user-info">
        <h4 class="user-name mb-0">{user.first_name} {user.last_name}</h4>
        <h6 class="text-muted">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</h6>
        </div>
        {auth.id === user.id && (
        <div class="col-auto profile-btn">
        <a class="btn btn-primary" data-bs-toggle="modal" href="#edit_personal_details">
        Edit
        </a>
        </div>
        )}
        </div>
        </div>
  
        <div class="tab-content profile-tab-cont">
  
  
        <div class="row">
        <div class="col-lg-12">
        <div class="card">
        <div class="card-body">
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Full Name</p>
        <p class="col-sm-10">{user.first_name} {user.last_name}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
        <p class="col-sm-10">{!user.birth_date ? '-' : new Date(user.birth_date).toLocaleDateString()}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
        <p class="col-sm-10">{user.email}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
        <p class="col-sm-10">{user.phone}</p>
        </div>
        <div class="row">
        <p class="col-sm-2 text-muted text-sm-end mb-0">Address</p>
        <p class="col-sm-10 mb-0">{user.address}<br />
        {user.city}<br />
        {user.state} - {user.zip_code},<br />
        {user.country}.</p>
        </div>
        </div>
        </div>
  
        <div class="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Personal Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form onSubmit={handleSubmit}>
        <div class="row form-row">
        
        <div class="col-12">
        <div class="form-group">
        <label>Photo profile</label>
        <input type="file" class="form-control" onChange={(e) => setData('image', e.target.files[0])} />
        </div>
        </div>
  
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} />
        </div>
        </div>
        <div class="col-12">
        <div class="form-group">
        <label>Date of Birth</label>
        <div class="cal-icon">
        <input type="date" class="form-control datetimepicker"  value={data.birth_date} onChange={(e) => setData('birth_date', e.target.value)}/>
        </div>
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Email ID</label>
        <input type="email" class="form-control" value={data.email} onChange={(e) => setData('email', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Mobile</label>
        <input type="text" value={data.phone} class="form-control" onChange={(e) => setData('phone', e.target.value)} />
        </div>
        </div>
        <div class="col-12">
        <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control" value={data.address} onChange={(e) => setData('address', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" value={data.city} onChange={(e) => setData('city', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>State</label>
        <input type="text" class="form-control" value={data.state} onChange={(e) => setData('state', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Zip Code</label>
        <input type="text" class="form-control" value={data.zip_code} onChange={(e) => setData('zip_code', e.target.value)} />
        </div>
        </div>
        <div class="col-12 col-sm-6">
        <div class="form-group">
        <label>Country</label>
        <input type="text" class="form-control" value={data.country} onChange={(e) => setData('country', e.target.value)} />
        </div>
        </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">Save Changes</button>
        </form>
        </div>
        </div>
        </div>
        </div>
  
        </div>
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
}

export default Profile