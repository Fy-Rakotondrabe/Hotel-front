import React, { Component } from 'react'
import { getAllRooms } from '../../services/roomService';
import RoomItem from './RoomItem';
import './Rooms.css';

class Rooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: null,
            page: 0
        }
    }

    componentDidMount () {
        getAllRooms()
            .then(data => this.setState({rooms: data}, () => this.pagination()))
    }

    pagination = () => {
        
    }

    render() {
        return (
            <div className="rooms_container">
                <p className="title">Our <span style={{ color: 'rgb(0, 136, 199)' }}>Rooms</span></p>
                <div className="rooms">
                    {this.state.rooms && this.state.rooms.map(room => (
                        <RoomItem room={room} key={room.sys.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Rooms