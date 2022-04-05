import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.myClass.map((person,i)=><li key={1} >{person}</li>)}
      </ul>
      </div>
    )
  }
}

