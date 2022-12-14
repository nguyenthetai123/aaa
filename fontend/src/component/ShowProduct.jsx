import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ShowProduct = () => {
  const [product, setProduct]=useState([])
  const getProduct= async () =>{
    const response= await axios.get('http://127.0.0.1:8000/api/')
    setProduct(response.data)
  }
  useEffect(()=>{
    getProduct()},[]
    )

  return (
    <div >
    <div className="main-students-show">
     
      {
        product.map((product,index)=>(
        <div key={index}>
         <Card className="cart_product_info m-3 rounded shadow-lg main-students-show" style={{ width: '22rem' }} >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
             {product.price}
            </Card.Text>
            <Card.Text>
             {product.desc}
            </Card.Text>
            <Card.Text>
             {product.category}
            </Card.Text>
            <Link className="btn btn-primary mr-2" to={`/${product.id}/`}>Full Detail</Link>
            
          </Card.Body>
        </Card>
        </div>
        ))
      }
    </div>
    </div>
  )
}

export default ShowProduct