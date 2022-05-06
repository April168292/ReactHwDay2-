import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';


export default function UpdatePost({ user, post }) {
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');
    const { postId } = useParams()

    const sendToFlask = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://127.0.0.1:5000/api/update/post/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: e.target.title.value,
                img_url: e.target.img_url.value,
                caption: e.target.caption.value,
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
        (<Navigate to={`/shop/${postId}`} />)
        :
        (
            <div className='border col-12 col-xs-9 col-sm-8 col-lg-4'>
                <h6>{message}</h6>
                <form onSubmit={(e) => sendToFlask(e)}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input name='title' type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder={post.title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img_url" className="form-label">Image Url</label>
                        <input name='img_url' type="text" className="form-control" id="img_url" placeholder={post.image} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="caption" className="form-label">Caption</label>
                        <input name='caption' type="text" className="form-control" id="caption" placeholder={post.caption} />
                    </div>
                    <div className='d-flex justify-content-around mb-2'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to={`/instagram/${postId}`}><button type="button" className="btn btn-primary">Cancel</button></Link>
                    </div>
                </form>
            </div>
        )
}