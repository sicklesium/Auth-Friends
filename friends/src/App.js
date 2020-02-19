import React, { Component } from 'react';
import Login from './components/Login';
import { Route, Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './App.css';
import FriendList from './components/FriendList';
import Navbar from './components/Navbar';
import AddFriend from './components/AddFriend';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid
          container
          style={{
            width: '100%',
            maxWidth: 1000,
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <Route exact path='/login' component={Login} />
          <Route exact path='/friends' component={FriendList} />
          <Route exact path='/addfriend' component={AddFriend} />
        </Grid>
      </div>
    );
  }
}

export default App;