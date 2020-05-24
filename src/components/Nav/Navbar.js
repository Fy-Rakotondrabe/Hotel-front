import React from 'react'
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa'

import './Nav.css'

class Navbar extends React.Component {

    state =  {
        open: false
    }

    _showDropDown = () => {
        this.setState({open: !this.state.open})
    }

    componentDidUpdate () {
        document.body.addEventListener('scroll', e => {
            console.log(e)
        }) 
    }

    render () {
        return (
            <nav>
                <h3 style={{marginLeft: '20px'}}><span>Analamanga</span><span className="blue-text">Hotel</span></h3>
                <ul className="web">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link style={{ color: "white", padding: '10px', borderRadius: '50px', backgroundColor:'rgb(67, 150, 204)' }} to="/rooms">
                            Browse Now
                        </Link>
                    </li> 
                </ul>
    
                <FaAlignRight className="btn-drop" onClick={() => this._showDropDown()} />
                <div className={this.state.open ? "mobile_container show" : "mobile_container hidden"}>
                    <ul style={{display: 'flex', flexDirection: 'column'}}>
                        <li>
                            <Link to="/" onClick={() => this._showDropDown()}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => this._showDropDown()}>
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link to="/rooms" onClick={() => this._showDropDown()}>
                                Browse Now
                            </Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
