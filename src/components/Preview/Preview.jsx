import React, { Component } from 'react'
import './Preview.css'

export class Preview extends Component {
  render() {
    return (
      <div className='preview'>
        <h1>{this.props.data.personaldetails.name}</h1>
        <p>{this.props.data.personaldetails.title}</p>
        <p>{this.props.data.personaldetails.location}</p>
        <p>{this.props.data.personaldetails.phone}</p>
        <p>{this.props.data.personaldetails.email}</p>
        <p>{this.props.data.personaldetails.desc}</p>
        {this.props.data.education.map((item)=>(
          <p>{item.uni}</p>
        ))}
        {this.props.data.work.map((item)=>(
          <p>{item.company}</p>
        ))}
      </div>
    )
  }
}

export default Preview
