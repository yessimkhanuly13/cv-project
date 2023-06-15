import React, { Component } from 'react'
import './Styles/Edu.css'

export class Education extends Component {
  render() {
    return (
      <div className='edu'>
        <h2>Education</h2>
        <input placeholder='Course/Program'></input>
        <input placeholder='University'></input>
        <input placeholder='Start Date'></input>
        <input placeholder='End Date'></input>
        <input placeholder='Description'></input>
      </div>
    )
  }
}

export default Education
