import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainInfo from './components/MainInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'

class App extends Component {
  render () {
    return (
      <div id="mainApp">
        <MainInfo />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    )
  }
}

export default App
