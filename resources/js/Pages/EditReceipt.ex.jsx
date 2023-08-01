import { Link, router, useForm } from '@inertiajs/react';
import { Autocomplete, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import { useState } from 'react';

const EditReceipt = ({ receipt, categories, tags, tagList, images }) => {
  // const { data, setData, put, progress } = useForm({
  //   name: receipt.name,
  //   description: receipt.description,
  //   category: receipt.category,
  //   cover: '',
  //   image: images,
  //   tag: tags,
  //   ingredient_amount: receipt.ingredient_amount,
  //   make_time: receipt.make_time,
  //   ingredient: receipt.ingredient
  // });
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

  const {data, setData, post, progress} = useForm({
    id: null,
    image: [],
    cover: null
  });

  // console.log(receiptData.name, receiptData.description, receiptData.category, receiptData.image, receiptData.tag, receiptData.ingredient_amount, receiptData.make_time, receiptData.ingredient);
  console.log(receiptData.tag);

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
    post('/add-image');
  }

  const handleDeleteImage = (id) => {
    router.delete(`/image/${id}`);
  }

  return (
    <div className="p-16" style={{ padding: 60 }}>
      <h1 className="font-medium text-">Edit {receipt.name} Recipe</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { my: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div >
          <TextField value={receiptData.name} onChange={(e) => setReceiptData({ ...receiptData, name: e.target.value })} id="outlined-basic" label="Name" variant="outlined" />
        </div>
        <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {categories.map((ctgr) => (
              <FormControlLabel checked={receipt.category === ctgr.category && true} onChange={(e) => setReceiptData({ ...receiptData, category: e.target.value })} value={ctgr.category} key={ctgr.id} control={<Radio />} label={ctgr.category} />
            ))}
          </RadioGroup>
        </FormControl>
        </div>
        
        <div className="mt-2">
          <Autocomplete
            multiple
            id="tags-outlined"
            options={tagList}
            getOptionLabel={(option) => option.tag}
            defaultValue={tags.map((tag) => (
              tag
            ))}
            onChange={handleTag}
            Tag
            
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tag"
                placeholder="Favorites"
              />
            )}
          />
        </div>
        <div >
          <TextField value={receiptData.ingredient_amount} onChange={(e) => setReceiptData({ ...receiptData, ingredient_amount:e.target.value })} id="outlined-basic" label="Ingredient amounts" variant="outlined" />
        </div>
        <div >
          <TextField value={receiptData.make_time} onChange={(e) => setReceiptData({ ...receiptData, make_time:e.target.value })} id="outlined-basic" label="Make time" variant="outlined" />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            onChange={(e) => setReceiptData({ ...receiptData, description:e.target.value })}
            value={receiptData.description}
            />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Ingredients"
            multiline
            rows={4}
            onChange={(e) => setReceiptData({ ...receiptData, ingredient:e.target.value })}
            value={receiptData.ingredient}
          />
        </div>
        <Button onClick={handleSubmit} variant="contained">Edit</Button>
        {/* <button type="button" onClick={handleSubmit} className="px-3 py-2 mt-2 bg-green-500 text-white rounded-md">Submit</button> */}
      </Box>
    
      <div style={{ marginTop: 60 }}>
        <div>
          <h4>Cover Image</h4>
        </div>
        <img src={`/storage/${receipt.cover}`} alt="" width={250}/>
        <div>
          <label htmlFor="">Cover Image</label>
          <div className="mt-1">
            <input type="file" onChange={(e) => setData('cover', e.target.files[0])} onClick={(e) => setData('id', receipt.unique_id)} />
          </div>
        </div>
        <button type="submit" onClick={handleEditCover}>Edit Cover</button>
      </div>

      <hr />
      <div >
        <div>
          <h4>Multiple Image</h4>
        </div>
        {images.map((img) => (
          <div style={{ marginBottom: 20 }}>
            <img src={`/storage/${img.image}`} style={{ marginRight: 20 }} width={250} alt="" />
            <button type="submit" onClick={() => handleDeleteImage(img.id)}  >Delete</button>
          </div>
        ))}
        <div style={{ marginTop: 15 }}>
          {/* <label htmlFor="">Multiple Image</label> */}
          <div className="mt-1">
            <input type="file" multiple onClick={(e) => setData('id', receipt.unique_id)} onChange={(e) => setData('image', e.target.files[0])} />
          </div>
        </div>
        <button type="submit" onClick={handleCreateImage}>Add Image</button>
      </div>
    </div>
  )
}

export default EditReceipt