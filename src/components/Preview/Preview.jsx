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
        <h2 className='edu-work-header'>Education</h2>
        <Eduprv data={data.education}/>
        <h2 className='edu-work-header'>Experience</h2>
        <Workprv data={data.work}/>
      </div>
    )
  }
}

export default Preview
