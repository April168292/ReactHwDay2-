import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import Login from './views/Login';
import News from './views/News';
import Shop from './views/Shop';
import SignUp from './views/Signup';
import SingleProduct from './views/SingleProduct';
import UpdatePost from './views/UpdatePost';
import UpdateProduct from './views/UpdateProduct';



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      age: 27,
      user: {}
    }
  }

logMeIn = (userObj) => {
  this.setState({user: userObj})
}
logMeOut = (userObj) => {
  this.setState({user: {}})
}

  happybirthday = () => {
    this.setState(
      {age: this.state.age + 1}
    )
  };

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.user} logMeOut={this.logMeOut}/>
        {/* <h1>Hi, I am {this.state['name']} and my age is {this.state.age}</h1>
        <button onClick={() => this.happybirthday()}>Happy Birthday</button>  */}
      <div className='container d-flex justify-content-center mt-4'>
        <Routes>
          <Route path= '/' element={<Home name = {this.state.name}/>}/>
          <Route path= '/about' element={<About myClass = {this.state.people}/>}/>
          <Route path= '/news' element={<News />}/>
          <Route path= '/shop' element={<Shop />}/>
          <Route path='/shop/:productId' element={<SingleProduct user={this.state.user} />} />
          <Route path= '/contact' element={<Contact />}/>

          <Route path='/login' element={<Login logMeIn={this.logMeIn}/>} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/shop/post/create' element={<CreatePost user={this.state.user} />} />
          
          <Route path='/shop/product/update' element={<UpdateProduct user={this.state.user} product={this.state.product} deleteProduct={this.deleteProduct} />} />
          <Route path='/shop/post/update' element={<UpdatePost user={this.state.user} product={this.state.product} deleteProduct={this.deleteProduct} />} />
          
        </Routes>
      </div>
      </div>
        
    )
  }
}

