import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import News from './views/News';
import Shop from './views/Shop';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'April',
      age: 27
    }
  }

  happybirthday = () => {
    this.setState(
      {age: this.state.age + 1}
    )
  };

  render() {
    return (
      <div>
        <Navbar myName={this.state.name} />
        {/* <h1>Hi, I am {this.state['name']} and my age is {this.state.age}</h1>
        <button onClick={() => this.happybirthday()}>Happy Birthday</button>  */}
      <div className='container d-flex justify-content-center mt-4'>
        <Routes>
          <Route path= '/' element={<Home name = {this.state.name}/>}/>
          <Route path= '/about' element={<About myClass = {this.state.people}/>}/>
          <Route path= '/news' element={<News />}/>
          <Route path= '/shop' element={<Shop />}/>
          <Route path= '/contact' element={<Contact />}/>
        </Routes>
      </div>
      </div>
        
    )
  }
}

