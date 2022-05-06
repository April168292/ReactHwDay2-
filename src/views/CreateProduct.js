import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


export default function CreateProduct({ user }) {
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');

    const sendToFlask = async (e) => {
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5000/api/products/create", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                product_name: e.target.product_name.value,
                img_url: e.target.img_url.value,
                description: e.target.description.value,
                price: e.target.price.value,
                username: user.username
            })
        });
        const data = await res.json();
        console.log(data);
        if (data.status === 'ok') {
            setRedirect(true)
        }
        else {
            setMessage(data.message)
        }
    };

    return redirect ?
        (<Navigate to='/shop' />)
        :
        (
            <div className='border col-12 col-xs-9 col-sm-8 col-lg-4'>
                <h6>{message}</h6>
                <form onSubmit={(e) => sendToFlask(e)}>
                    <div className="mb-3">
                        <label htmlFor="product_name" className="form-label">Product Name</label>
                        <input name='product_name' type="text" className="form-control" id="product_name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img_url" className="form-label">Image Url</label>
                        <input name='img_url' type="text" className="form-control" id="img_url" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input name='description' type="textarea" className="form-control" id="description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input name='price' type="text" className="form-control" id="price" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
}