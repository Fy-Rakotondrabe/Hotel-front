import React, { Component } from 'react'
import './Booking.css';
import { getOneRoom } from '../../services/roomService';

export default class Booking extends Component {
    constructor (props) {
        super(props)
        this.state = {
            room: null
        }
    }

    componentDidMount () {
        getOneRoom(this.props.match.params.id.substring(0,this.props.match.params.id.length))
            .then(data => this.setState({room: data}))
    }

    render() {
        console.log(this.state.room)
        return (
            <div className="book_container">
                <div>
                    <div className="form_container relative">
                        <div className="img">
                            <img className="book_img" src={this.state.room && this.state.room.fields.images[0].fields.file.url} alt=""/>
                        </div>
                        {this.state.room && (
                            <form className="book_form">
                                <p className="form-title">Book the <span style={{ color: 'rgb(0, 136, 199)' }}>{this.state.room.fields.name}</span> room</p>
                                <input type="text" placeholder="Name" name='name' className="form-control" onChange={(e) => this._handleChange(e)}/>
                                <input type="mail" placeholder="Mail" name='mail' className="form-control" onChange={(e) => this._handleChange(e)}/>
                                <input type="text" placeholder="Phone number" className="form-control" onChange={(e) => this._handleChange(e)} />
                                <label htmlFor="date" style={{marginTop: '10px', marginLeft: '10px', fontSize: '15px', marginBottom: '10px'}}>Save for</label>
                                <input type="date" name="date" id="date" className="form-control" />
                                <button className="btn-send" onClick={(e) => this._handleSubmit(e)} >Save</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
