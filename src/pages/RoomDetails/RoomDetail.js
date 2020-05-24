import React, { Component } from 'react'
import { getOneRoom } from '../../services/roomService';
import './RoomDetail.css';

import {Link} from 'react-router-dom'

import {IoMdHeartEmpty} from 'react-icons/io'

class RoomDetail extends Component {
    constructor(props) {
        super (props)
        this.state = {
            room: null
        }
    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})
        getOneRoom(this.props.match.params.id.substring(1,this.props.match.params.id.length))
            .then(data => this.setState({room: data}))
    }
    
    render() {
        console.log(this.state)
        let {room} = this.state
        return (
            <div style={{marginTop: '50px', width: '100%', overflowX: 'hidden !important'}}>
                {this.state.room !== null && (
                    <div className="chambre">
                        <div className="big_image">
                            <img className="detail_img" src={room.fields.images[0].fields.file.url} alt=""/>
                            <Link to='/rooms' className="back">
                                Back to romms liste
                            </Link>
                        </div>
                        <div className="more_container">
                            {room.fields.images.map((image, index) => (
                                index > 0 && <img src={image.fields.file.url} alt="" className="more"/>
                            ))}
                        </div>
                        <h1 className="name">{room.fields.name}</h1>
                        <Link to={`/booking/${room.sys.id}`} className="book">
                            <h2>Book this room</h2>
                        </Link>
                        <div className="deco">
                            <span className="trait"></span><IoMdHeartEmpty /><span className="trait"></span>
                        </div>
                        <div className="detail_container">
                            <div className="description_container">
                                <div className="description">
                                    <h1>Description</h1>
                                    <p>{room.fields.description}</p>
                                </div>
                                <div className="info">
                                    <h1>Info</h1>
                                    <p>Price : {room.fields.price}$ per night</p>
                                    <p>Type : {room.fields.type}</p>
                                    <p>Capacity : {room.fields.capacity} person(s)</p>
                                    <p>Pets {room.fields.pets ? '' : 'not'} allowed</p>
                                    <p>Breakfast {room.fields.breakfast ? '' : 'not'} included</p>
                                </div>
                            </div>
                            <div>
                                <h1>Extras</h1>
                                <div className="extras">
                                    {room.fields.extras.map(extra => (
                                        <span style={{marginBottom: '20px'}}>-{extra}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default RoomDetail