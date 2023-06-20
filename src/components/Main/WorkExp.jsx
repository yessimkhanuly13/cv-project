import React, { Component } from 'react'
import './Styles/WorkExp.css'

export class WorkExp extends Component {
  
  handleChange = (e) =>{
    this.props.onChange(e, this.props.data.id)
    console.log(this.props.data)
  }

  handleDelete = () =>{
    this.props.onDelete(this.props.data.id);
  }
  
  render() {
    return (
      <div className='work'>
        <input placeholder='Company' onChange={this.handleChange}name='company'></input>
        <input placeholder='Position' onChange={this.handleChange} name="position"></input>
        <input placeholder='Start Date' onChange={this.handleChange} name="start"></input>
        <input placeholder='End Date' onChange={this.handleChange} name="end"></input>
        <input placeholder='Description'onChange={this.handleChange} name="desc"></input>
        <br></br>
        <button onClick={this.handleDelete}>Delete</button>
        <br></br>
      </div>
    )
  }
}

export default WorkExp
