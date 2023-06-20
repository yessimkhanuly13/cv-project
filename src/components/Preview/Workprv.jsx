import React, { Component } from 'react'

export class Workprv extends Component {
  render() {
    return (
      <>
      {this.props.data.map((item)=>(
        <div className='workprv'>
          <p>{item.company}</p>
          <p>{item.position}</p>
          <p>{item.start}</p>
          <p>{item.end}</p>
          <p>{item.desc}</p>
        </div>
      ))}
    </>
    )
  }
}

export default Workprv