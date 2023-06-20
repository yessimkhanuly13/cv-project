import React, { Component } from 'react'
import './Styles/Edu.css'


export class Education extends Component {
  handleInputChange = (e) =>{
    this.props.onChange(e, this.props.data.id);
    // console.log(this.props.data.education)
  }

  handleDelete = () =>{
    this.props.onDelete(this.props.data.id);
  }

  render() {
    return (
      <div className='edu'>
        <input placeholder='Course/Program' onChange={this.handleInputChange} name="course"></input>
        <input placeholder='University' onChange={this.handleInputChange} name="uni"></input>
        <input placeholder='Start Date' onChange={this.handleInputChange} name="start"></input>
        <input placeholder='End Date' onChange={this.handleInputChange} name="end"></input>
        <input placeholder='Description' onChange={this.handleInputChange} name="desc"></input>
        <br></br>
        <button onClick={this.handleDelete}>Delete</button>
        <br></br>
      </div>
    )
  }
}

export default Education
