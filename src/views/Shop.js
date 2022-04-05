import React, { Component } from 'react'
import Product from '../components/Product';


export default class Shop extends Component {
    constructor(){
      super();
      this.state = {
          products: []    
        }
    }

  componentDidMount = async () => {
     const res = await fetch(`http://127.0.0.1:5000/api/products`);
     const data = await res.json();
     console.log(data)
     const myProducts = data.products
    this.setState({
        products: myProducts

      })

  }

  render() {
    return (
      <div className='row justify-content-around'>
        {this.state.products.map((p, i)=><Product key={i} product={p} />)}
        </div>
    )
  }
}
  