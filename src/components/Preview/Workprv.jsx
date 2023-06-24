import React, { Component } from 'react'
import './Styles/EduWorkprv.css'

export class Workprv extends Component {
  render() {
    return (
      <>
      {this.props.data.map((item)=>(
          <div className='edu-workprv'>
              <div className='edu-work-date'>
                <p>{item.start} - {item.end}</p>
              </div>
              <div className='data-edu-work'>
                <p>{item.company}</p>
                <p>{item.position}</p>
                <p className='desc'>{item.desc}</p>
              </div>
          </div>
      ))}
    </>
    )
  }
}

export default Workprv