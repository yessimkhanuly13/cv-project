import React, { Component } from 'react'

export class Eduprv extends Component {
  render() {
    return (
      <>
        {this.props.data.map((item)=>(
          <div className='eduprv'>
            <p>{item.course}</p>
            <p>{item.uni}</p>
            <p>{item.start}</p>
            <p>{item.end}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </>
    )
  }
}

export default Eduprv