import React, { Component } from 'react'
import './Styles/Preview.css'

export class Personalprv extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className='personalprv'>
        <div className="header-prv">
          <div className="left-prv">
            <span className='name'>{data.name}</span>
            <p>{data.title}</p>
          </div>
          <div className='right-prv'>
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