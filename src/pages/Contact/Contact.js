import React from 'react'
import './Contact.css';

class Contact extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            mail: '',
            message: ''
        }
    }

    _handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render () {
        return (
            <div className="contact_container">
                <div>
                    <div className="form_container">
                        <div className="background"></div>
                        <form>
                            <p className="form-title">Contact <span style={{ color: 'rgb(0, 136, 199)' }}>Us</span></p>
                            <input type="text" placeholder="Name" name='name' className="form-control" onChange={(e) => this._handleChange(e)}/>
                            <input type="mail" placeholder="Mail" name='mail' className="form-control" onChange={(e) => this._handleChange(e)}/>
                            <textarea cols="30" rows="10" name='message' placeholder="Votre message" className="text-area form-control" onChange={(e) => this._handleChange(e)}></textarea>
                            <button className="btn-send" onClick={(e) => this._handleSubmit(e)} >Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
