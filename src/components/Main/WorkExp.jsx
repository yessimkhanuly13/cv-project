import React, { Component } from 'react'
import './Styles/WorkExp.css'

export class WorkExp extends Component {
  render() {
    return (
      <div className='work'>
        <h2>Work Experience</h2>
        <input placeholder='Company'></input>
        <input placeholder='Position'></input>
        <input placeholder='Start Date'></input>
        <input placeholder='End Date'></input>
        <input placeholder='Description'></input>
        <br></br>
        <button onClick={this.props.add}>add</button>
      </div>
    )
  }
}

export default WorkExp
