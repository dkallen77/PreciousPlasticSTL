import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    constructor(props) {
      super(props);
      this.state={
          expanded: false
      }
    }

    // expand = (event) => {
    //     var button = document.getElementById("ourSolutionExpander");
    //     document.getElementById("ourSolutionExpander").disabled = true;
    //     var expansion = document.getElementById("ourSolutionExpansion");
    //     var  expand = (this.state.expanded === false) ? true : false;
    //     this.setState({
    //         expanded: !(this.state.expanded)
    //     });
    //     //let's try for a good animation
        
    //     if (expand) {
    //         button.style.transform = "rotate(180deg)";
    //         var height = 0;
    //         var id = setInterval(frame, 0);
    //         function frame() {
    //           if (height === 586) {
    //             clearInterval(id);
    //             button.disabled = false;
    //           } 
    //           else {
    //             height++;
    //             expansion.style.height = height + 'px';
    //             button.style.bottom = "10px";
    //           }
    //         }
    //     }
    //     else {
    //         button.style.transform = "rotate(0deg)";
    //         height = 586;
    //         id = setInterval(frame, 0);
    //         function frame() {
    //           if (height === 0) {
    //             clearInterval(id);
    //             button.disabled = false;
    //           } 
    //           else {
    //             height--;
    //             expansion.style.height = height + 'px';
    //             button.style.bottom = "10px";
    //           }
    //         }
    //     }
    // }

    render(){
        return (
            <div className="OurSolution">
                {/* <a name="oursolution" className="page-start-solution">Our Solution</a>
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
                            
                            {/* <div id="ourSolutionExpansion">
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
                    </div>                */} */}
            </div>
        );
    }
}

export default AboutUs;
