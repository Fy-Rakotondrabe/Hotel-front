import React from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Nav/Navbar';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import RoomDetail from './pages/RoomDetails/RoomDetail';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound';
import Booking from './pages/Booking/Booking';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/rooms/room/:id' component={RoomDetail} />
        <Route path='/booking/:id' component={Booking} />
        <Route path='/contact' component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  )
}

export default App
