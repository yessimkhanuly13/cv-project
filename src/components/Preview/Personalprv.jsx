import React, { Component } from 'react'
import './Styles/Preview.css'

export class Personalprv extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className='personalprv'>
          <p>{data.name}</p>
        <div className='top'>
          <p>{data.title}</p>
          <ul>
            <li>{data.location}</li>
            <li>{data.email}</li>
            <li>{data.phone}</li>
          </ul>
        </div>
        <p>{data.desc}</p>
      </div>
    )
  }
    
}

export default Personalprv