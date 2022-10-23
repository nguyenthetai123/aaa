
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Link,useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const [product,setProduct]=useState([])
  let history = useNavigate ();

  const {id} = useParams();
  const getSingleProduct= async ()=>{
    const {data}= await axios.get(`http://127.0.0.1:8000/api/${id}/`)
    console.log(data)
    setProduct(data)
  }
  
  useEffect(() => {
    getSingleProduct();
});
const deleteProduct = async (id) => {
  await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
  history.push("/")
}

  return (
    <div>
      <h1>ProductDetail</h1>
      <hr>
      </hr>
      <div className='full-product-detail'>

        <img src={product.image} height="300" width="300" alt=''/>
        <div className='product-detail'>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.desc}</p>
          <p>{product.category}</p>
        </div>
      </div>
      <Link className="btn btn-outline-primary mr-2" to={`/${product.id}/update`}>Update</Link>
      <Link className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</Link>
      
    </div>
  )
}

export default ProductDetail