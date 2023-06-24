import React, { Component } from 'react'
import './Styles/Personalprv.css'

export class Personalprv extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className='personalprv'>
        <div className="header-prv">
            <h2 className='name'>{data.name}</h2>
            <p>{data.title}</p>
          <div className='loc-em-phone'>
              <li>{data.location}</li>
              <li>{data.email}</li>
              <li>{data.phone}</li>
          </div>
        </div>
        <p>{data.desc}</p>
      </div>
    )
  }
    
}

export default Personalprv