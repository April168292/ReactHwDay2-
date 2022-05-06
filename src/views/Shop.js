import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from '../components/Product';

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(async ()=>{
        const res = await fetch(`http://localhost:5000/api/products`);
        const data = await res.json();
        if (data.status === 'ok') {
            setProducts(data.products)
        }
        else {
            // redirect
        }
    },[])


  return (
    <div className='row'>
        <Link to='/shop/post/create'><button type='button' className='btn btn-primary'>Create Product</button></Link>
        {products.map((p, i)=><Product key={i} product={p}/>)}
    </div>
  )
}
