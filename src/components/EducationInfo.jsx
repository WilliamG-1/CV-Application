import { Component } from 'react'

export default class EducationInfo extends Component {

    constructor(props) {
        super(props);

    }
    handleOnChangeDate = (e) => {

        console.log(e.target.value);
    }

    render() {
        return (
            <div id="educationInfo">
                <h2> Education </h2>
                <form id="educationInfoForm">
                    <input type="text" placeholder="School Name"></input>
                    <input type="text" placeholder="Title"></input>
                    <input type="date" onChange={this.handleOnChangeDate}></input>
                    <input type="date" onChange={this.handleOnChangeDate}></input> { /* Change this to a prop lol*/}
                </form>
            </div>
        )
    }
}

