import React, { Component } from 'react'
import './Styles/PersonalDet.css'

export class PersonalDetails extends Component {
  render() {
    return (
      <div className='per-det'>
        <h2>Personal Details</h2>
        <input placeholder='Name' onChange={this.props.onChange} name="name"></input>
        <input placeholder='Title' onChange={this.props.onChange} name="title"></input>
        <input placeholder='Phone' onChange={this.props.onChange} name="phone"></input>
        <input placeholder='Email'onChange={this.props.onChange} name="email"></input>
        <input placeholder='Location' onChange={this.props.onChange} name="location"></input>
        <input placeholder='Description'onChange={this.props.onChange} name="desc"></input>
      </div>
    )
  }
}

export default PersonalDetails
