import React, { Component } from 'react';
import './recycleComponents/Recycle.css'
import background from "./recycleComponents/recycleBackground.png"
import RecycleForm from "./recycleComponents/RecycleForm"

class Recycle extends Component {


    render() {
        return(
            //html goes here
            <div id="recycle">
                <div id="recycleMain">
                    <h1>Why Recycle?</h1>
                    {/* this section will have the animated picture
                        and some facts about why current methods aren't
                        enough or don't work and then also a button to
                        expand the page*/}
                </div>
                <div id="recycleExpansion">
                    {/* This would be more complicated. Have embeded map
                        to show location and a button to trigger API to get
                        weather information. Put up the current information  */}
                        <button id="expander" onClick={this.expand}>
                            <svg  viewBox="-0.5 -0.5 11 11">
                                <path d="M 10 0 L 5 10 L 0 0"></path>
                            </svg>  
                        </button>
                        <h1>Is today a good day to Recycle?</h1>
                        <RecycleForm />
                </div>
                <div id="recycleTransition">
                    <img id="background" src={background} alt="ahh" />
                </div>
            </div>
        );
    }

    state = {
        expanded: false
    }

    expand = (event) => {
        var button = document.getElementById("expander");
        document.getElementById("expander").disabled = true;
        var expansion = document.getElementById("recycleExpansion");
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
}

export default Recycle;