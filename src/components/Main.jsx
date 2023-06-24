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
        name:"Chi Zuri",
        title:"Software Engineer",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Id aliquet risus feugiat in ante metus dictum. Lorem mollis aliquam ut porttitor leo a diam. Nunc sed id semper risus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Leo vel fringilla est ullamcorper eget. Sapien nec sagittis aliquam malesuada. Sit amet luctus venenatis lectus magna fringilla. Et netus et malesuada fames ac. Aliquam purus sit amet luctus.",
        location:"Astana, Kazakhstan",
        phone:"+7 (777) 777 77 77",
        email:"example@example.com"
      }, 
      education:[
        {
          id:uniqid(),
          course:"CS50",
          uni:"Harvard",
          start:"25 September 2023",
          end:"25 June 2027",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Id aliquet risus feugiat in ante metus dictum. Lorem mollis aliquam ut porttitor leo a diam. Nunc sed id semper risus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Leo vel fringilla est ullamcorper eget. Sapien nec sagittis aliquam malesuada. Sit amet luctus venenatis lectus magna fringilla. Et netus et malesuada fames ac. Aliquam purus sit amet luctus."
        }
      ],
      work:[
        {
          id:uniqid(),
          company:"Apple",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Id aliquet risus feugiat in ante metus dictum. Lorem mollis aliquam ut porttitor leo a diam. Nunc sed id semper risus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Leo vel fringilla est ullamcorper eget. Sapien nec sagittis aliquam malesuada. Sit amet luctus venenatis lectus magna fringilla. Et netus et malesuada fames ac. Aliquam purus sit amet luctus.",
          start:"25 September 2023",
          end:"25 June 2027",
          position:"Software Engineer"
        }
      ], 
  
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
          course:"",
          uni:"",
          start:"",
          end:"",
          desc:""
        }
      ],
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

    console.log(this.state.education)
  }

  handleChangeWork = (e, id) =>{
    const {name, value} = e.target;
    this.setState((prevState)=>{
      const workItem = prevState.work.map((item)=>{
        if(item.id === id){
          return {...item, [name]:value}
        }
        return item;
      })
      return {work: workItem}
    })
  }

  handleDeleteEdu = (id) =>{
    this.setState((prevState)=>{
      const eduItems = prevState.education.filter((item)=>item.id !== id);
      return {
        ...prevState,
        education:[...eduItems]
      }
    })
    console.log(this.state.education)
  }
  
  handleDeleteWork = (id) =>{
    this.setState((prevState)=>{
      const workItems = prevState.work.filter((item)=>item.id !== id);
      return {
        ...prevState,
        work: [...workItems]
      }
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

            <h2 className='mr-h2'>Education</h2>
            {
              this.state.education.map((item)=>(
                <Education
                  onChange={this.handleChangeEdu}
                  data={item}
                  onDelete={this.handleDeleteEdu}
                  />
              ))
            }

            <button  className='add-btn' onClick={this.handleAddEducation}>Add</button>
            
            <h2 className='mr-h2'>Work Experience</h2>
            {
              this.state.work.map((item)=>(
                <WorkExp
                  onChange={this.handleChangeWork}
                  data={item}
                  onDelete={this.handleDeleteWork}
                />
              ))
            }
            <button className='add-btn' onClick={this.handleAddWork}>Add</button>
            
        </div>
        <div className='right'>
            <Preview data={this.state} />
        </div>
      </div>
    )
  }
}

export default Main
