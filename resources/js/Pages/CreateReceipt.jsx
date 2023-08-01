import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm, usePage } from '@inertiajs/react';
import { Autocomplete } from '@mui/joy';
import React, { useState } from 'react'

const CreateReceipt = ({ tags, categories, auth, status }) => {

  const { flash } = usePage().props;
  // console.log(tags);
  // collect all the data from inputs
  const { data, setData, post, progress, errors } = useForm({
    name: '',
    description: '',
    category: '',
    cover: '',
    image: [],
    tag: [],
    ingredient_amount: '',
    make_time: '',
    ingredient: ''
  });

  console.log(flash.message);
  // handle for add a tag to array
  const handleTag = (event, tag) => {
    setData('tag', tag);
  }

  // const handleCategory = (e, category) => {
  //   setData('category', category);
  // }

  // handle for store data
  const handleSubmit = (e) => {
    e.preventDefault();

    post('/receipt');
  }

  return (
    <AuthenticatedLayout user={auth}>
      <Head title='Create Recipe' />
      <div className="page-wrapper">
      <div className="content container-fluid">

      <div className="page-header">
      <div className="row">
      <div className="col-sm-7 col-auto">
      <h3 className="page-title">Add New Recipe</h3>
      <ul className="breadcrumb">
      <li className="breadcrumb-item active"><br/></li>
      </ul>
      </div>



      <div className="row">
      <div className="col-md-12">
      <div className="card">

      <div className="card-body">

      <form onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-xl-6">
      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Recipe Name</label>
      <div className="col-lg-8">
      <input onChange={(e) => setData('name', e.target.value)} type="text" className="form-control" />
      <p style={{ color: 'red' }}>{errors.name}</p>
      </div>
      </div>

      <div className="form-group row">
      <label className="col-lg-4 col-form-label">No of Incredients</label>
      <div className="col-lg-8">
      <input onChange={(e) => setData('ingredient_amount', e.target.value)} type="text" className="form-control"/>
      <p style={{ color: 'red' }}>{errors.ingredient_amount}</p>
      </div>
      </div>

      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Incredients</label>
      <div className="col-lg-8">
      <input onChange={(e) => setData('ingredient', e.target.value)} type="text" className="form-control"/>
      <p style={{ color: 'red' }}>{errors.ingredient}</p>
      </div>
      </div>

      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Preparation Method</label>
      <div className="col-lg-8">
      <textarea onChange={(e) => setData('description', e.target.value)} className="form-control" cols="5"></textarea>
      <p style={{ color: 'red' }}>{errors.description}</p>
      </div>
      </div>

      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Preparation Time</label>
      <div className="col-lg-8">
      <input onChange={(e) => setData('make_time', e.target.value)} type="text" className="form-control"/>
      <p style={{ color: 'red' }}>{errors.make_time}</p>
      </div>
      </div>

      </div>
      <div className="col-xl-6">
      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Category</label>
      <div className="col-lg-8">
      <select className="form-select" onChange={(e) => setData('category', e.target.value)}>
      <option>Select</option>
      {categories.map((ctgr) => (
        <option key={ctgr.id} value={ctgr.category}>{ctgr.category}</option>
      ))}
      </select>
      <p style={{ color: 'red' }}>{errors.category}</p>
      </div>
      </div>
      {/* <div className="form-group row">
      <label className="col-lg-4 col-form-label">Tags</label>
      <div className="col-lg-8">
      <input type="text" className="form-control" onChange={(e) => setData('tag', e.target.value)}/>
      <p style={{ color: 'red' }}>{errors.tag}</p>
      </div>
      </div> */}
      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Tags</label>
      <div className="col-lg-8">
        <Autocomplete
          multiple
          id="tags-default"
          placeholder="Favorites"
          options={tags}
          getOptionLabel={(option) => option.tag}
          onChange={handleTag}
          // defaultValue={[tags[0]]}
        />
        <p style={{ color: 'red' }}>{errors.tag}</p>
        
      </div>
      </div>
      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Cover Image</label>
      <div className="col-lg-8">
      <input type="file" className="form-control" onChange={(e) => setData('cover', e.target.files[0])}/>
      only jpg,png,jpeg allowed max size 512 kb
      <p style={{ color: 'red' }}>{errors.cover}</p>
      </div>
      </div>

      <div className="form-group row">
      <label className="col-lg-4 col-form-label">Images</label>
      <div className="col-lg-8">
      <input type="file" className="form-control" multiple onChange={(e) => setData('image', e.target.files)}/>
      only jpg,png,jpeg allowed max size 512 kb
      <p style={{ color: 'red' }}>{errors.image}</p>
      </div>
      </div>


      </div>

      </div>
      <div className="text-end">
      {flash.message && (
          <p style={{ color: 'red' }}>{flash.message}</p>
        )}
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
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

export default CreateReceipt