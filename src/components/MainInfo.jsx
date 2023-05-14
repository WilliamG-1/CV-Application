import { Component } from 'react'

export default class MainInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div id="mainInformation">
                <h2> Personal Information </h2>
                <form id="mainInfoForm">
                    <input type="text" placeholder="First Name" id="firstname" onChange={this.props.onChange}></input>
                    <input type="text" placeholder="Last Name" id="lastname" onChange={this.props.onChange}></input>
                    <input type="text" placeholder="example@email.com" id="email" onChange={this.props.onChange}></input>
                    <input type="numeric" placeholder="999-999-9999" id="phonenumber"></input>
                </form>
            </div>
        )
    }
}

