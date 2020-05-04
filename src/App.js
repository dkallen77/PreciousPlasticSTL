import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import MainPicture from './MainPicture';
import Recycle from './Recycle';
import OurSolution from './OurSolution';
import AboutUs from './AboutUs';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <MainPicture />
          <Recycle />
          <OurSolution />
          <AboutUs />
        </div>
      </div>
    );
  }
}

export default App;
