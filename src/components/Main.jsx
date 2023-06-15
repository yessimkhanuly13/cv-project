import React, { Component } from 'react'
import Education from './Main/Education'
import PersonalDetails from './Main/PersonalDetails'
import WorkExp from './Main/WorkExp'
import './Main.css'
import Preview from './Preview/Preview'


export class Main extends Component {
  render() {
    return (
      <div className='main'>
        <div className='left'>
            <PersonalDetails/>
            <Education/>
            <WorkExp/>
        </div>
        <div className='right'>
            <Preview/>
        </div>
      </div>
    )
  }
}

export default Main
