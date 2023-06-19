import React, { Component } from 'react'
import './Preview.css'

export class Preview extends Component {
  render() {
    return (
      <div className='preview'>
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.title}</p>
        <p>{this.props.data.location}</p>
        <p>{this.props.data.phone}</p>
        <p>{this.props.data.email}</p>
        <p>{this.props.data.desc}</p>
      </div>
    )
  }
}

export default Preview
