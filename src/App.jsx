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
      <div id="main">
        <div id="information">
          <MainInfo />
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
