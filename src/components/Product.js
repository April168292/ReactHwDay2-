import React, { Component } from 'react'

export default class Product extends Component {
  render() {
      const p = this.props.product
    return (
        <div>
            {p.product_name}
        </div>
    )
  }
}
