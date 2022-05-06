import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Post from '../components/Post';

export default class IG extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/posts`);
        const data = await res.json();
        console.log(data)
        const myPosts = data.posts
        this.setState({
            posts: myPosts
        })
    }

    render() {
        return (
            <div className='justify-content-around'>
                {(this.props.user.username) &&
                    <div className='d-flex justify-content-center mb-1'>
                        <Link to='/create_post'><button type='button' className='btn btn-primary'>Create Post</button></Link>
                    </div>
                }

                {this.state.posts.map((p, i) => <Post key={i} post={p} />)}
            </div>
        )
    }
}