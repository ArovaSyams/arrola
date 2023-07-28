import { useForm } from '@inertiajs/react';
import { Autocomplete, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateReceipt = ({ tags, categories }) => {

  // collect all the data from inputs
  const { data, setData, post, progress } = useForm({
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

  console.log(data.name, data.description, data.category, data.image, data.tag, data.ingredient_amount, data.make_time, data.ingredient);
  // handle for add a tag to array
  const handleTag = (event, tag) => {
    setData('tag', tag);
  }

  // handle for store data
  const handleSubmit = () => {
    // e.preventDefault();

    post('/receipt');
  }

  return (
    <div className="p-16" style={{ padding: 60 }}>
      <h1 className="font-medium text-">Create Recipe</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { my: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div >
          <TextField onChange={(e) => setData('name', e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
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
              <FormControlLabel onChange={(e) => setData('category', ctgr.category)} value={ctgr.category} key={ctgr.id} control={<Radio />} label={ctgr.category} />
            ))}
          </RadioGroup>
        </FormControl>
        </div>

        <div>
          <label htmlFor="">Cover Image</label>
          <div className="mt-1">
            <input type="file" onChange={(e) => setData('cover', e.target.files[0])} />
          </div>
        </div>

        <div style={{ marginTop: 15 }}>
          <label htmlFor="">Multiple Image</label>
          <div className="mt-1">
            <input type="file" multiple onChange={(e) => setData('image', e.target.files)} />
          </div>
        </div>
        <div className="mt-2">
          <Autocomplete
            multiple
            id="tags-outlined"
            options={tags}
            getOptionLabel={(option) => option.tag}
            // defaultValue={[top100Films[0]]}
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
          <TextField onChange={(e) => setData('ingredient_amount', e.target.value)} id="outlined-basic" label="Ingredient amounts" variant="outlined" />
        </div>
        <div >
          <TextField onChange={(e) => setData('make_time', e.target.value)} id="outlined-basic" label="Make time" variant="outlined" />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            onChange={(e) => setData('description', e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Ingredients"
            multiline
            rows={4}
            onChange={(e) => setData('ingredient', e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} variant="contained">Create</Button>
        {/* <button  className="px-3 py-2 mt-2 bg-green-500 text-white rounded-md">Submit</button> */}
      </Box>
    </div>
  )
}

export default CreateReceipt


