import React, { Component } from 'react'
import './Styles/Preview.css'
import Personalprv from './Personalprv'
import Eduprv from './Eduprv';
import Workprv from './Workprv';

export class Preview extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className='preview'>
        <Personalprv data={data.personaldetails}/>
        <Eduprv data={data.education}/>
        <Workprv data={data.work}/>
      </div>
    )
  }
}

export default Preview
