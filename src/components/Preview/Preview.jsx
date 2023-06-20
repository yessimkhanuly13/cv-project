import React, { Component } from 'react'
import './Preview.css'
import Personalprv from './Personalprv'
// import Eduprv from './Eduprv';
// import Workprv from './Workprv';

export class Preview extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className='preview'>
        <Personalprv data={data.personaldetails}/>
        {/* {
          data.education.map((item)=>(
            <Eduprv data={item}/>
          ))
        }
        {
          data.work.map((item)=>(
            <Workprv data={item}/>
          ))
        } */}
      </div>
    )
  }
}

export default Preview
