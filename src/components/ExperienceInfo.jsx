import { Component } from 'react'

export default class ExperienceInfo extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div id="experienceInfo">
                <h2>Experience</h2>
                <form id="experienceInfoForm">
                    <input type="text" placeholder="Company Name"></input>
                    <input type="text" placeholder="Title"></input>
                    <input type="text" placeholder="Description" id="experienceDescription"></input>
                    <input type="date"></input>
                    <input type="date"></input>
                </form>
            </div>
        )
    }
}