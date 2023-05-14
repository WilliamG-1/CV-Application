import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainInfo from './components/MainInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import Preview from './components/preview'
class App extends Component {

  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstname: "Mandy's Candy",
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

    switch (inputId) {
      case 'firstname':
        console.log("First name input being changed");
        this.setState({
          personalInfo: {

          }
        })
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
    console.log(`Daet is being changed, new date ${e.target.value}`)
  }

  handleOnAddEducation = () => {

  }

  handleOnAddExperience = () => {

  }


  render() {
    return (
      <div id="main">
        <div id="information">
          <MainInfo onChange={this.handleOnTextChange} />
          <EducationInfo />
          <ExperienceInfo />
        </div>

        <div id="preview">
          <Preview Personalinfo={this.state.personalInfo} EducationInfo={this.state.educationEntry} ExperienceInfo={this.state.experienceEntry} />
        </div>

      </div>
    )
  }
}

export default App
