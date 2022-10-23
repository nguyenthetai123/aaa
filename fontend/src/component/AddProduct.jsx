import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';


const AddProduct = () => {
  let history = useNavigate ();


  const [image, setImage]=useState(null)
  const [name,setName]= useState("")
  const [price, setPrice]= useState("")
  const [desc,setDesc]= useState("")
  const [category,setCategory]= useState("")

  const addNewProduct= async ()=>{
    let formField = new FormData()
    formField.append('name',name)
    formField.append('price',price)
    formField.append('desc',desc)
    formField.append('category',category)
    if(image!==null) {
      formField.append('image',image)
    }
    await axios({
      method: 'post',
      url:'http://localhost:8000/api/',
      data: formField
    }).then(response=>{
      console.log(response.data);
      history('/');
    })
  }
  return (
  <>
    <div>AddProduct</div>
    <div className="container">
        <div className='form-control'>
          <input type="file" className="form-control form-control-lg"name='image'  onChange={(e)=>setImage(e.target.files[0])}/>
          <input type="text" className="form-control form-control-lg"
          placeholder='enter name' name='name' value={name} onChange={(e) => setName(e.target.value)}
          />
           <input type="text" className="form-control form-control-lg"
          placeholder='enter price' name='price' value={price} onChange={(e) => setPrice(e.target.value)}
          />
           <input type="text" className="form-control form-control-lg"
          placeholder='enter desc' name='desc' value={desc} onChange={(e) => setDesc(e.target.value)}
          />
           <input type="text" className="form-control form-control-lg"
          placeholder='enter category' name='category' value={category} onChange={(e) => setCategory(e.target.value)}
          />
           <button className="btn btn-primary btn-block" onClick={addNewProduct}>Add Student</button>
        </div>
      </div>
    </>
  )
}

export default AddProduct;