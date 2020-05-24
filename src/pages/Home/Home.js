import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { IoMdHeartEmpty } from 'react-icons/io'

const Home = () => {
    return (
        <div>
            <div className="landing_container">
                <div className="text_container">
                    <h1>Welcome to Analamanga Hotel</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nisi omnis ut, debitis quis odio sequi officiis sint ex</p>

                    <Link to="/rooms">
                        <button className="btn-blue">
                            <span to="/rooms" style={{fontSize: '16px', fontWeight: 'bold'}}>Browse Now</span>
                        </button>
                    </Link>
                </div>
                <img src="home.svg" alt="House" className="landing_img"/>
            </div>
            <div className="service_container">
                <h1>Nos services</h1>
                <div className="deco">
                    <span className="trait"></span><IoMdHeartEmpty /><span className="trait"></span>
                </div>
            </div>
        </div>
    )
}

export default Home
