import { Component} from 'react'

export default class MainInfo extends Component {
    
    render () {
        return (
            <div id="mainInformation">
                <h2> Personal Information </h2>
                <form id="mainInfoForm">
                    <input type="text" placeholder="First Name" id="firstName"></input>
                    <input type="text" placeholder="Last Name" id="lastname"></input>
                    <input type="text" placeholder="example@email.com" id="email"></input>
                    <input type="numeric" placeholder="999-999-9999" id="phonenumber"></input>
                </form>
            </div>
        )
    }
}

