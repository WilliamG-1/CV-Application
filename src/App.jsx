import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainInfo from './components/MainInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'

class App extends Component {

    constructor ( ) {
      super();
      this.state = {
        personalInfo: {
          firstname: "",
          lastname: "",
          email: "",
          phonenumber: ""
        },
        educationEntry: {
          schoolname: "",
          title: "",
          startdate: "",
          enddate: ""
        },
        education: [

        ],
        experienceEntry: {
          companyname: "",
          title: "",
          description: "",
          startdate: "",
          enddate: ""
        },
        experience: [
          
        ]
      }
      
    }

    handleOnTextChange = (e) => {
      const inputId = e.target.id;
      const inputText = e.target.value;

      switch (inputId)
      {
        case 'firstname':
          console.log("First name input being changed");
          break;
        case 'lastname':
          console.log("Last name input being changed");
          break;
        case 'email':
          console.log("Email input being changed");
          break;
      }
    }

    handleOnEmailChange = (e) => {

    }

    handleOnDateChange = (e) => {

    }

    handleOnAddEducation = () => {

    }

    handleOnAddExperience = () => {

    }


    render () {
      return (
        <div id="main">
          <div id="information">
            <MainInfo onChange={this.handleOnTextChange}/>
            <EducationInfo />
            <ExperienceInfo />
          </div>

          <div id="preview">
            Hello There
          </div>

        </div>
      )
    }
}

export default App
