import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import MainPicture from './MainPicture';
import OurSolution from './OurSolution';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <MainPicture />
        <OurSolution />
      </div>
    );
}
}

export default App;
