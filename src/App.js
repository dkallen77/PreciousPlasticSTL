import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import MainPicture from './MainPicture';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <MainPicture />
      </div>
    );
}
}

export default App;
