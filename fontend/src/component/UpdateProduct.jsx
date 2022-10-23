import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStudent = () => {

  let history = useNavigate ();

  const { id } = useParams();

    
  const [image, setImage]=useState(null)
  const [name,setName]= useState("")
  const [price, setPrice]= useState("")
  const [desc,setDesc]= useState("")
  const [category,setCategory]= useState("")

   

    // load students by its is and show data to forms by value

   const loadProduct= async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
   
    setImage(result.data.image);
    setName(result.data.name);
    setPrice(result.data.price);
    setDesc(result.data.desc);
    setCategory(result.data.category);
   }
   useEffect(()=>{
    loadProduct()},[]);

// Update s single student by id

   const updateSingleProduct = async () => {
        let formField = new FormData()

        formField.append('name',name)
    formField.append('price',price)
    formField.append('desc',desc)
    formField.append('category',category)

        if(image !== null) {
          formField.append('image', image)
        }

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data)
           history("/");
        })

    }



    

    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Update A product</h2>
    

    <div className="form-group">
      
         <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>

      <div className='form-control'>
          
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
      </div>
      <button onClick={updateSingleProduct} className="btn btn-primary btn-block">Update Student</button>
   
  </div>
</div>
 
    );
};

export default UpdateStudent;