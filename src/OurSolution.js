import React, { Component } from 'react';
import './OurSolution.css';
import clean from './img/clean.mp4';
import dirtyBottle from './img/dirty_bottle.png';
import cleanBottle from './img/clean_bottle.png';
import shreddedBottle from './img/shredded_bottle.png';
import shred from './img/shred.mp4';
import inject from './img/inject.mp4';
import background from "./recycleComponents/recycleBackground.png";
import ourSolutionImg from "./img/ourSolution-img.jpg";
import turtle from './img/turtle.png';

class OurSolution extends Component {
    constructor(props) {
      super(props);
      this.state={
          step:0,
          expanded: false
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
        if(this.state.step === 0){
            var vid = document.getElementById("cleanVid");
            vid.play();
            var draggable = document.getElementById("dirty-bottle");
            draggable.style.display = "none";
            document.getElementById("div1").style.display= "none";
            this.setState({step:1});            
        }
        else if(this.state.step === 1){
            vid = document.getElementById("shredVid");
            vid.play();
            draggable = document.getElementById("clean-bottle");
            draggable.style.display = "none";
            document.getElementById("div2").style.display= "none";
            this.setState({step:2});
        }
        else if(this.state.step === 2){
            vid = document.getElementById("injectVid");
            vid.play();
            draggable = document.getElementById("shredded-bottle");
            draggable.style.display = "none";
            document.getElementById("div3").style.display= "none";
            this.setState({step:0});
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
        var clean = document.getElementById("cleanVid");
        clean.load();
        clean.style.display="block";

        var shred = document.getElementById("shredVid");
        shred.load();

        var inject = document.getElementById("injectVid");
        inject.load();

        document.getElementById("injectVid").style.display="none";
        document.getElementById("div1").style.display="block";
        document.getElementById("dirty-bottle").style.display="block";
        document.getElementById("replay").style.display="none";
    }

    expand = (event) => {
        var button = document.getElementById("ourSolutionExpander");
        document.getElementById("ourSolutionExpander").disabled = true;
        var expansion = document.getElementById("ourSolutionExpansion");
        var  expand = (this.state.expanded === false) ? true : false;
        this.setState({
            expanded: !(this.state.expanded)
        });
        //let's try for a good animation
        
        if (expand) {
            button.style.transform = "rotate(180deg)";
            var height = 0;
            var id = setInterval(frame, 0);
            function frame() {
              if (height === 586) {
                clearInterval(id);
                button.disabled = false;
              } 
              else {
                height++;
                expansion.style.height = height + 'px';
                button.style.bottom = "10px";
              }
            }
        }
        else {
            button.style.transform = "rotate(0deg)";
            height = 586;
            id = setInterval(frame, 0);
            function frame() {
              if (height === 0) {
                clearInterval(id);
                button.disabled = false;
              } 
              else {
                height--;
                expansion.style.height = height + 'px';
                button.style.bottom = "10px";
              }
            }
        }
    }

    render(){
        return (
            <div className="OurSolution">
                <a name="solution" className="page-start-aboutus">About Us</a>
                    <div id="ourSolutionMain">
                        <h1>Our Solution</h1>
                        <br/>
                        <div className="ourSolution-blurb">
                            There are many schools and businesses in the St. Louis area that need help improving their recycling methods.
                                We reached out to these places and asked them if we can collect their plastic to recycle ourselves. We built
                                three machines that recycle the plastic for us. Using these machines we can turn recycled plastic into almost
                                anything! Since we are handling the recycling process ourselves, we can make sure that the plastic is 
                                properly cleaned and recycled, and no plastic gone into landfils.
                            
                        </div>
                        <br/>
                        <div className="img-container">
                        <img src={ourSolutionImg} alt="Our Solution Main Image" className="ourSolutionImg"/>
                        </div>
                    </div>
                        {/* This would be more complicated. Have embeded map
                            to show location and a button to trigger API to get
                            weather information. Put up the current information  */}
                            
                            <div id="ourSolutionExpansion">
                            <button id="ourSolutionExpander" onClick={this.expand}>
                                <svg  viewBox="-0.5 -0.5 11 11">
                                    <path d="M 10 0 L 5 10 L 0 0"></path>
                                </svg>  
                            </button>
                            <h1>How Do Our Machines Work?</h1>
                            <h2>Click and drag the plastic water bottle to find out how our machines work</h2>
                    <div className="interative">
                        <div className="draggable">
                            <div id="drag1" draggable="true" onDragStart={(e) => this.drag(e)}>
                            <img src={dirtyBottle} alt="Dirty Water Bottle" className="dragImg" id="dirty-bottle"/>
                            <img src={cleanBottle} alt="Clean Water Bottle" className="dragImg" id="clean-bottle"/>
                            <img src={shreddedBottle} alt="Shredded Water Bottle" className="dragImg" id="shredded-bottle"/>
                            </div>
                            <div className="replay" id="replay" onClick={this.replay}>
                                Replay
                            </div>
                        </div>

                    <video id="cleanVid" className="cleanVid" onEnded={this.cleanVidEnded}>
                        <source src={clean} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                    <div id="div1" className="droptarget" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}></div>
                    <video id="shredVid" className="shredVid" onEnded={this.shredVidEnded}>
                        <source src={shred} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                    <div id="div2" className="droptarget" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}></div>
                    <video id="injectVid" className="injectVid" onEnded={this.injectVidEnded}>
                        <source src={inject} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                    <div id="div3" className="droptarget" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}></div>
                    </div>
                    </div>
                    <div id="ourSolutionTransition">
                        <img id="background-solution" src={turtle} alt="ahh" />
                    </div>               
            </div>
        );
    }

    componentDidMount(){
        var clean = document.getElementById("cleanVid");
        clean.load();

        var shred = document.getElementById("shredVid");
        shred.load();

        var inject = document.getElementById("injectVid");
        inject.load();
    }
}

export default OurSolution;
