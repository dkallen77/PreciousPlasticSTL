import React, { Component } from 'react';
import './recycleComponents/Recycle.css'
import background from "./recycleComponents/recycleBackground.png"

class Recycle extends Component {


    render() {
        return(
            //html goes here
            <div id="recycle">
                <div id="recycleMain">
                    <img id="background" src={background} alt="ahh" />
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
                </div>
            </div>
        );
    }

}

export default Recycle;