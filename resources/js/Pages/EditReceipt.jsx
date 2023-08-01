import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { Autocomplete } from '@mui/joy';
import React, { useState } from 'react'

const EditReceipt = ({ receipt, categories, tags, tagList, images, auth }) => {
  const { flash } = usePage().props;

  const [receiptData, setReceiptData] = useState({
    name: receipt.name,
    description: receipt.description,
    category: receipt.category,
    cover: '',
    image: images,
    tag: tags,
    ingredient_amount: receipt.ingredient_amount,
    make_time: receipt.make_time,
    ingredient: receipt.ingredient
  });

  console.log(receiptData);
  const {data, setData, post, progress} = useForm({
    id: null,
    image: [],
    cover: null
  });

  // handle for add a tag to array
  const handleTag = (event, tag) => {
    setReceiptData({ ...receiptData, tag: tag });
  }

  // handle for store data
  const handleSubmit = () => {
    router.put(`/receipt/${receipt.unique_id}`, receiptData);
  }

  const handleEditCover = () => {
    post('/cover');
  }

  const handleCreateImage = () => {
    post(`/add-image/${receipt.unique_id}`);
  }

  const handleDeleteImage = (id) => {
    router.delete(`/image/${id}`);
  }

  return (
    <AuthenticatedLayout user={auth}>
      <Head title={`Edit ${receipt.name}`} />
      <div class="page-wrapper">
      <div class="content container-fluid">

        <div class="page-header">
        <div class="row">
        <div class="col-sm-7 col-auto">
        <h3 class="page-title">Edit Recipe</h3>
        <ul class="breadcrumb">
        <li class="breadcrumb-item active"><br/></li>
        </ul>
        </div>



        <div class="row">
        <div class="col-md-12">
        <div class="card">

        <div class="card-body">

        {/* <form onSubmit={handleSubmit}> */}
        <div class="row">
        <div class="col-xl-6">
        <div class="form-group row">
        <label class="col-lg-4 col-form-label">Recipe Name</label>
        <div class="col-lg-8">
        <input value={receiptData.name} onChange={(e) => setReceiptData({ ...receiptData, name: e.target.value })} type="text" class="form-control" />
        </div>
        </div>

        <div class="form-group row">
        <label class="col-lg-4 col-form-label">No of Incredients</label>
        <div class="col-lg-8">
        <input value={receiptData.ingredient_amount} onChange={(e) => setReceiptData({ ...receiptData, ingredient_amount:e.target.value })} type="text" class="form-control" />
        </div>
        </div>

        <div class="form-group row">
        <label class="col-lg-4 col-form-label">Incredients</label>
        <div class="col-lg-8">
        <input onChange={(e) => setReceiptData({ ...receiptData, ingredient:e.target.value })} value={receiptData.ingredient} type="text" class="form-control" />
        </div>
        </div>

        <div class="form-group row">
        <label class="col-lg-4 col-form-label">Preparation Method</label>
        <div class="col-lg-8">
        <textarea onChange={(e) => setReceiptData({ ...receiptData, description:e.target.value })} value={receiptData.description} class="form-control" cols="5"></textarea>
        </div>
        </div>

        <div class="form-group row">
        <label class="col-lg-4 col-form-label">Preparation Time</label>
        <div class="col-lg-8">
        <input value={receiptData.make_time} onChange={(e) => setReceiptData({ ...receiptData, make_time:e.target.value })} type="text" class="form-control" />
        </div>
        </div>

        </div>
        <div class="col-xl-6">
        <div class="form-group row">
        <label class="col-lg-4 col-form-label">Category</label>
        <div class="col-lg-8">
        <select class="form-select" onChange={(e) => setReceiptData({ ...receiptData, category: e.target.value })} >
        <option>{receipt.category}</option>
        {categories.map((ctgr) => (
          <option key={ctgr.id} value={ctgr.category}>{ctgr.category}</option>
        ))}
        </select>
        </div>
        </div>
        {/* <div class="form-group row">
        <label class="col-lg-4 col-form-label">Tags</label>
        <div class="col-lg-8">
        <input type="text" class="form-control" onChange={handleTag} value={receiptData.tag}/>
        </div>
        </div> */}
        <div className="form-group row">
        <label className="col-lg-4 col-form-label">Tags</label>
        <div className="col-lg-8">
          <Autocomplete
            multiple
            id="tags-default"
            placeholder="Favorites"
            options={tagList}
            getOptionLabel={(option) => option.tag}
            onChange={handleTag}
            defaultValue={tags.map((tag) => (tag))}
          />
        </div>
        </div>
        
        </div>

        </div>
        <div class="text-end">
        {flash.message && (
          <p style={{ color: 'red' }}>{flash.message}</p>
        )}
        <button onClick={handleSubmit} class="btn btn-primary">Edit</button>
        </div>
        {/* </form> */}
        </div>
        </div>
        </div>
        </div>

        <div class="col-sm-7 col-auto">
        <h3 class="page-title">Edit Cover</h3>
        <ul class="breadcrumb">
        <li class="breadcrumb-item active"><br/></li>
        </ul>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">

              <div class="card-body">
              <div class="form-group row">
              <label class="col-lg-2 col-form-label">
              <img src={`/storage/${receipt.cover}`} alt="" width={150} style={{ borderRadius: 10 }} />
              </label>
              <div class="col-lg-10">
              <input onChange={(e) => setData('cover', e.target.files[0])} onClick={(e) => setData('id', receipt.unique_id)} type="file" class="form-control" />
              only jpg,png,jpeg allowed max size 512 kb
              </div>
              </div>

              <div class="text-end">
                <button onClick={handleEditCover} class="btn btn-primary">Edit</button>
              </div>

              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-7 col-auto">
        <h3 class="page-title">Edit Images</h3>
        <ul class="breadcrumb">
        <li class="breadcrumb-item active"><br/></li>
        </ul>
        </div>
        
        <div class="row">
          <div class="col-md-12">
            <div class="card">

              <div class="card-body">
              {images.map((img) => (
              <div class="form-group row">
              <label class="col-lg-2 col-form-label">
                <img src={`/storage/${img.image}`} width={150} alt="" style={{ borderRadius: 10 }} />
              </label>
              <div class="col-lg-10">
              {/* <input type="file" class="form-control" multiple /> */}
              {/* only jpg,png,jpeg allowed max size 512 kb <br/> */}
              <button className='btn btn-danger mt-2' type="submit" onClick={() => handleDeleteImage(img.id)}>Delete</button>
              </div>
              </div>

              ))}
              <hr />
              <div class="form-group row mt-5">
              <label class="col-lg-2 col-form-label">Images</label>
              <div class="col-lg-10">
              <input type="file" class="form-control" onClick={(e) => setData('id', receipt.unique_id)} onChange={(e) => setData('image', e.target.files[0])} />
              only jpg,png,jpeg allowed max size 512 kb
              </div>
              </div>
              <div class="text-end">
              {flash.message && (
                <p style={{ color: 'red' }}>{flash.message}</p>
              )}
                <button onClick={handleCreateImage} class="btn btn-primary">Add Images</button>
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
}

export default EditReceipt