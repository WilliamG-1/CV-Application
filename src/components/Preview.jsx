import { Component } from 'react'

export default class Preview extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        // Gets the information (The object with all da stuff)
        //const { PersonalInfo, EducationInfo, ExperienceInfo } = this.props
        return (
            <div>
                {/* <div className="pFirstname">{PersonalInfo['firstname']}a</div>
                <div className="pLastName">{PersonalInfo['lastname']}</div> */}
                You are the  best mah
            </div>
        )
    }
}