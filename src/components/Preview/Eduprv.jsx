import React, { Component } from 'react'

export class Eduprv extends Component {
  render() {
    return (
      <>
        {this.props.data.map((item)=>(
          <div className='eduprv'>
            <div className='data-edu'>
              <p>{item.course}</p>
              <p>{item.uni}</p>
              <p>{item.desc}</p>
            </div>
            <div className='edu-date'>
              <p>{item.start} - {item.end}</p>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Eduprv