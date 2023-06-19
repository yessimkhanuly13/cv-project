import React, { Component } from 'react'
import Education from './Main/Education'
import PersonalDetails from './Main/PersonalDetails'
import WorkExp from './Main/WorkExp'
import './Main.css'
import Preview from './Preview/Preview'
import uniqid from 'uniqid'


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
      }, 
      education:[
        {
          id:uniqid(),
          uni:"",
          start:"",
          end:"",
          desc:""
        }
      ],
      work:[
        {
          id:uniqid(),
          company:"",
          desc:"",
          start:"",
          end:"",
          position:""
        }
      ]
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

  handleAddEducation = () =>{
    this.setState((prevState)=>({
      ...prevState,
      education:[
        ...prevState.education, 
        {
          id:uniqid(),
          uni:"",
          start:"",
          end:"",
          desc:""
        }
      ]

    }))
    console.log(this.state)
  }

  handleAddWork = () =>{
    this.setState((prevState) => ({
      ...prevState,
      work:[
        ...prevState.work,
        {
          id:uniqid(),
          company:"",
          desc:"",
          start:"",
          end:"",
          position:""
        }
      ]
    }))
    console.log(this.state.work)
  }

  //Изменение части образования 
  handleChangeEdu = (e, id) =>{
    const {name, value} = e.target;   //обозначаем что будем менять
    this.setState((prevState)=>{  
      const eduItem = prevState.education.map((item)=>{  //пробегаемся по массиву обучения с this.state
        if(item.id === id){   //находим соответствие с данным id
          return {...item, [name]:value} //меням объект с данным id
        }
        return item; //возвращаем массив 
      })
      return {education: eduItem} //переписываем массив в this.state
    })
  }


  render() {
    return (
      <div className='main'>
        <div className='left'>
            <PersonalDetails 
              data={this.state.personaldetails} 
              onChange={this.handleChangePersonal} 
              />
            <Education
              data={this.state.education} 
              add={this.handleAddEducation}
              onChange={this.handleChangeEdu}
              />
            <WorkExp
              data={this.state.work}
              add={this.handleAddWork}
              // onChange={}
            />
        </div>
        <div className='right'>
            <Preview data={this.state.personaldetails} />
        </div>
      </div>
    )
  }
}

export default Main
