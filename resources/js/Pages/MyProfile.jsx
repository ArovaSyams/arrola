import AuthAdminLayout from '@/Layouts/AuthAdminLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react'

const MyProfile = ({ auth }) => {
  const { data, setData, post, progress, errors } = useForm({
    first_name: auth.first_name,
    last_name: auth.last_name,
    email: auth.email,
    phone: auth.phone,
    birth_date: auth.birth_date,
    address: auth.address,
    city: auth.city,
    state: auth.state,
    zip_code: auth.zip_code,
    country: auth.country,
    image: ''
  });

  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/update-profile/${auth.id}`)
    location.reload();
  }

  if(auth.role === 'user') {
    return (
      <AuthenticatedLayout user={auth}>
        <Head title={`${auth.first_name} Profile`} />
        <div className="page-wrapper">
        <div className="content container-fluid">
  
        <div className="page-header">
        <div className="row">
        <div className="col-sm-7 col-auto">

        <h3 className="page-title">My Profile</h3>

        <ul className="breadcrumb">
        <li className="breadcrumb-item active"><br/></li>
        </ul>
        </div>
  
        <div className="row">
        <div className="col-md-12">
        <div className="profile-header">
        <div className="row align-items-center">
        <div className="col-auto ">
        {/* <a data-bs-toggle="modal" href="#edit_personal_details"> */}
        {/* <div style={{ width: 100, height:100, borderRadius: 100, backgroundColor: 'black' }}> */}
          <img className="image-full" style={{ objectFit:'cover', width: 100, height: 100, borderRadius: 100 }} alt="User Image" src={`/storage/${auth.image}`} />
        {/* </div> */}
        {/* </a> */}
        </div>
        <div className="col ml-md-n2 profile-user-info">
        <h4 className="user-name mb-0">{auth.first_name} {auth.last_name}</h4>
        <h6 className="text-muted">{auth.role.charAt(0).toUpperCase() + auth.role.slice(1)}</h6>
        </div>
        <div className="col-auto profile-btn">
        <a className="btn btn-primary" data-bs-toggle="modal" href="#edit_personal_details">
        Edit
        </a>
        </div>

        </div>
        </div>
  
        <div className="tab-content profile-tab-cont">
  
  
        <div className="row">
        <div className="col-lg-12">
        <div className="card">
        <div className="card-body">
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Full Name</p>
        <p className="col-sm-10">{auth.first_name} {auth.last_name}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
        <p className="col-sm-10">{!auth.birth_date ? '-' : new Date(auth.birth_date).toLocaleDateString()}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
        <p className="col-sm-10">{auth.email}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
        <p className="col-sm-10">{auth.phone}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0">Address</p>
        <p className="col-sm-10 mb-0">{auth.address}<br />
        {auth.city}<br />
        {auth.state} - {auth.zip_code},<br />
        {auth.country}.</p>
        </div>
        </div>
        </div>
  
        <div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ opacity: 1 }}>
        <div className="modal-header">
        <h5 className="modal-title">Personal Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <div className="row form-row">
        
        <div className="col-12">
        <div className="form-group">
        <label>Photo profile</label>
        <input type="file" className="form-control" onChange={(e) => setData('image', e.target.files[0])} />
        </div>
        </div>
  
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} />
        </div>
        </div>
        <div className="col-12">
        <div className="form-group">
        <label>Date of Birth</label>
        <div className="cal-icon">
        <input type="date" className="form-control datetimepicker"  value={data.birth_date} onChange={(e) => setData('birth_date', e.target.value)}/>
        </div>
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Email ID</label>
        <input type="email" className="form-control" value={data.email} onChange={(e) => setData('email', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Mobile</label>
        <input type="text" value={data.phone} className="form-control" onChange={(e) => setData('phone', e.target.value)} />
        </div>
        </div>
        <div className="col-12">
        <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" value={data.address} onChange={(e) => setData('address', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>City</label>
        <input type="text" className="form-control" value={data.city} onChange={(e) => setData('city', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>State</label>
        <input type="text" className="form-control" value={data.state} onChange={(e) => setData('state', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Zip Code</label>
        <input type="text" className="form-control" value={data.zip_code} onChange={(e) => setData('zip_code', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Country</label>
        <input type="text" className="form-control" value={data.country} onChange={(e) => setData('country', e.target.value)} />
        </div>
        </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Save Changes</button>
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
        <div className="page-wrapper">
        <div className="content container-fluid">
  
        <div className="page-header">
        <div className="row">
        <div className="col-sm-7 col-auto">

        <h3 className="page-title">My Profile</h3>

        <ul className="breadcrumb">
        <li className="breadcrumb-item active"><br/></li>
        </ul>
        </div>
  
        <div className="row">
        <div className="col-md-12">
        <div className="profile-header">
        <div className="row align-items-center">
        <div className="col-auto ">
        {/* <a data-bs-toggle="modal" href="#edit_personal_details"> */}
        {/* <div style={{ width: 100, height:100, borderRadius: 100, backgroundColor: 'black' }}> */}
          <img className="image-full" style={{ objectFit:'cover', width: 100, height: 100, borderRadius: 100 }} alt="User Image" src={`/storage/${auth.image}`} />
        {/* </div> */}
        {/* </a> */}
        </div>
        <div className="col ml-md-n2 profile-user-info">
        <h4 className="user-name mb-0">{auth.first_name} {auth.last_name}</h4>
        <h6 className="text-muted">{auth.role.charAt(0).toUpperCase() + auth.role.slice(1)}</h6>
        </div>
        <div className="col-auto profile-btn">
        <a className="btn btn-primary" data-bs-toggle="modal" href="#edit_personal_details">
        Edit
        </a>
        </div>

        </div>
        </div>
  
        <div className="tab-content profile-tab-cont">
  
  
        <div className="row">
        <div className="col-lg-12">
        <div className="card">
        <div className="card-body">
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Full Name</p>
        <p className="col-sm-10">{auth.first_name} {auth.last_name}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
        <p className="col-sm-10">{!auth.birth_date ? '-' : new Date(auth.birth_date).toLocaleDateString()}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
        <p className="col-sm-10">{auth.email}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
        <p className="col-sm-10">{auth.phone}</p>
        </div>
        <div className="row">
        <p className="col-sm-2 text-muted text-sm-end mb-0">Address</p>
        <p className="col-sm-10 mb-0">{auth.address}<br />
        {auth.city}<br />
        {auth.state} - {auth.zip_code},<br />
        {auth.country}.</p>
        </div>
        </div>
        </div>
  
        <div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ opacity: 1 }}>
        <div className="modal-header">
        <h5 className="modal-title">Personal Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <div className="row form-row">
        
        <div className="col-12">
        <div className="form-group">
        <label>Photo profile</label>
        <input type="file" className="form-control" onChange={(e) => setData('image', e.target.files[0])} />
        </div>
        </div>
  
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} />
        </div>
        </div>
        <div className="col-12">
        <div className="form-group">
        <label>Date of Birth</label>
        <div className="cal-icon">
        <input type="date" className="form-control datetimepicker"  value={data.birth_date} onChange={(e) => setData('birth_date', e.target.value)}/>
        </div>
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Email ID</label>
        <input type="email" className="form-control" value={data.email} onChange={(e) => setData('email', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Mobile</label>
        <input type="text" value={data.phone} className="form-control" onChange={(e) => setData('phone', e.target.value)} />
        </div>
        </div>
        <div className="col-12">
        <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" value={data.address} onChange={(e) => setData('address', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>City</label>
        <input type="text" className="form-control" value={data.city} onChange={(e) => setData('city', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>State</label>
        <input type="text" className="form-control" value={data.state} onChange={(e) => setData('state', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Zip Code</label>
        <input type="text" className="form-control" value={data.zip_code} onChange={(e) => setData('zip_code', e.target.value)} />
        </div>
        </div>
        <div className="col-12 col-sm-6">
        <div className="form-group">
        <label>Country</label>
        <input type="text" className="form-control" value={data.country} onChange={(e) => setData('country', e.target.value)} />
        </div>
        </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Save Changes</button>
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

export default MyProfile