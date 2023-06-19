import React, { Component } from 'react'
import Education from './Main/Education'
import PersonalDetails from './Main/PersonalDetails'
import WorkExp from './Main/WorkExp'
import './Main.css'
import Preview from './Preview/Preview'


export class Main extends Component {
  constructor(){
    super();
    this.state = {
      personaldetails:{
        name:"",
        title:"",
        desc:"",
        location:"",
        phone:"",
        email:""
      }
    }
  }

  handleChangePersonal = (e) =>{
    const {name, value} = e.target;
    this.setState((prevState) => ({
      personaldetails:{
        ...prevState.personaldetails,
        [name]: value
      }
    }))
    
    // console.log(this.state.personaldetails )
    console.log(e.target)
  }

  render() {
    return (
      <div className='main'>
        <div className='left'>
            <PersonalDetails 
              data={this.state.personaldetails} 
              onChange={this.handleChangePersonal} 
              />
            <Education/>
            <WorkExp/>
        </div>
        <div className='right'>
            <Preview data={this.state.personaldetails} />
        </div>
      </div>
    )
  }
}

export default Main
