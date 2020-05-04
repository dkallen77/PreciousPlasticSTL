import React, { Component } from 'react';
import './OurSolution.css';
import clean from './img/clean.mp4';
import dirtyBottle from './img/dirty_bottle.png';
import cleanBottle from './img/clean_bottle.png';
import shreddedBottle from './img/shredded_bottle.png';
import shred from './img/shred.mp4';
import inject from './img/inject.mp4';

class OurSolution extends Component {
    constructor(props) {
      super(props);
      this.state={
          step:0
      }
    }

    allowDrop(e) {
        e.preventDefault();
    }
      
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
      
    drop = (ev) => {
        ev.preventDefault();
        document.getElementById("div1").style.display= "none";
        if(this.state.step == 0){
            var vid = document.getElementById("cleanVid");
            vid.play();
            var draggable = document.getElementById("dirty-bottle");
            draggable.style.display = "none";
            document.getElementById("div1").style.display= "none";
            this.setState({step:1});            
        }
        else if(this.state.step == 1){
            var vid = document.getElementById("shredVid");
            vid.play();
            var draggable = document.getElementById("clean-bottle");
            draggable.style.display = "none";
            document.getElementById("div2").style.display= "none";
            this.setState({step:2});
        }
        else if(this.state.step == 2){
            var vid = document.getElementById("injectVid");
            vid.play();
            var draggable = document.getElementById("shredded-bottle");
            draggable.style.display = "none";
            document.getElementById("div3").style.display= "none";
            this.setState({step:3});
        }
    }

    cleanVidEnded(){
        var draggable = document.getElementById("clean-bottle");
        draggable.style.display = "block";

        document.getElementById("shredVid").style.display="block";
        document.getElementById("cleanVid").style.display = "none";

        document.getElementById("div2").style.display= "block";
    }

    shredVidEnded(){
        var draggable = document.getElementById("shredded-bottle");
        draggable.style.display = "block";

        document.getElementById("injectVid").style.display="block";
        document.getElementById("shredVid").style.display = "none";

        document.getElementById("div3").style.display= "block";
    }

    injectVidEnded(){
        document.getElementById("replay").style.display = "block";
    }

    replay(){
        document.getElementById("cleanVid").style.display="block";
        document.getElementById("injectVid").style.display="none";
        document.getElementById("div1").style.display="block";
        document.getElementById("dirty-bottle").style.display="block";
        document.getElementById("replay").style.display="none";
    }

    render(){
        return (
            <div className="OurSolution">
                <div id="drag1" draggable="true" onDragStart={(e) => this.drag(e)}>
                    <img src={dirtyBottle} alt="Dirty Water Bottle" className="dragImg" id="dirty-bottle"/>
                    <img src={cleanBottle} alt="Clean Water Bottle" className="dragImg" id="clean-bottle"/>
                    <img src={shreddedBottle} alt="Shredded Water Bottle" className="dragImg" id="shredded-bottle"/>
                </div>
                
                <div className="repaly" id="replay" onClick={this.replay}>
                    Replay
                </div>

                <video id="cleanVid" className="cleanVid" onEnded={this.cleanVidEnded}>
                    <source src={clean} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
                <div id="div1" class="droptarget" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}></div>
                <video id="shredVid" className="shredVid" onEnded={this.shredVidEnded}>
                    <source src={shred} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
                <div id="div2" class="droptarget" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}></div>
                <video id="injectVid" className="injectVid" onEnded={this.injectVidEnded}>
                    <source src={inject} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
                <div id="div3" class="droptarget" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}></div>
            </div>
        );
    }
}

export default OurSolution;
