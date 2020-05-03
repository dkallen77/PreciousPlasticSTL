import React, { Component } from 'react';
import './OurSolution.css';
import clean from './img/clean.mp4';

class OurSolution extends Component {
    constructor(props) {
      super(props);
    }

    playVid(){
        var vid = document.getElementById("cleanVid");
        vid.play();
    }
  
    render(){
        return (
            <div className="OurSolution">
                <video id="cleanVid" width="320" height="176" onClick={this.playVid}>
                    <source src={clean} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
            </div>
        );
    }
}

export default OurSolution;
