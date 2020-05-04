import React, { Component } from 'react';
import './OurSolution.css';
import clean from './img/clean.mp4';
import dirtyBottle from './img/dirty_bottle.png';
import shred from './img/shred.mp4';

class OurSolution extends Component {
    constructor(props) {
      super(props);
    }

    playVidClean(){
        var vid = document.getElementById("cleanVid");
        vid.play();
    }

    playVidShred(){
        var vid = document.getElementById("shredVid");
        vid.play();
    }

    // // dropEvent(){
    // //     alert("dropped");
    // // }

    // dragStart = (e) => {
    //     e.dataTransfer.setData("text/plain", e.target.id);
    // }

    // allowDrop = (e) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    // }

    // drop = (e) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     // var data = event.dataTransfer.getData("Text");
    //     // event.target.appendChild(document.getElementById(data));
    //     // document.getElementById("demo").innerHTML = "The p element was dropped";
    //     var vid = document.getElementById("cleanVid");
    //     vid.play();
    // }
  
    render(){
        return (
            <div className="OurSolution">
                {/* <div className="item" >
                    <img src={dirtyBottle} ondragstart={(e) => this.dragStart(e)}/>
                </div>
                <div className="droptarget" ondrop={(e) => this.drop(e)} ondragover={(e) => this.allowDrop(e)}></div> */}
                <video id="cleanVid" width="1600" height="880" onClick={this.playVidClean}>
                    <source src={clean} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
                <video id="shredVid" width="1600" height="880" onClick={this.playVidShred}>
                    <source src={shred} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
            </div>
        );
    }
}

export default OurSolution;
