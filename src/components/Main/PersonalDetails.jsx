import React, { Component } from 'react'
import './Styles/PersonalDet.css'

export class PersonalDetails extends Component {
  render() {
    return (
      <div className='per-det'>
        <h2>Personal Details</h2>
        <input placeholder='Name'></input>
        <input placeholder='Title'></input>
        <input placeholder='Phone'></input>
        <input placeholder='Email'></input>
        <input placeholder='Location'></input>
        <input placeholder='Description'></input>
      </div>
    )
  }
}

export default PersonalDetails
