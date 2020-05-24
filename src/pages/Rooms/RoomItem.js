import React from 'react'
import { Link } from 'react-router-dom';

const RoomItem = ({room}) => {
    return (
        <Link className="room" to={`/rooms/room/:${room.sys.id}`} style={{textDecoration: 'none', color: '#000'}}>
            <div className="card">
                <div className="img_container">
                    <img src={room.fields.images[0].fields.file.url} alt={room.fields.slug}/>
                    <span className="price">{room.fields.price}$ per night</span>
                </div>
                <div className="overlay">
                    <span className="details">More details...</span>
                </div>
                <div className="card_footer">
                    <p className="room_name">{room.fields.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default RoomItem
