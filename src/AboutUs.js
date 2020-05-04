import React, { Component } from 'react';
import './AboutUs.css';
import turtle from './img/turtle.png';

class AboutUs extends Component {
    constructor(props) {
      super(props);
      this.state={
          expanded: false
      }
    }

    expand = (event) => {
        var button = document.getElementById("aboutUsExpander");
        document.getElementById("aboutUsExpander").disabled = true;
        var expansion = document.getElementById("aboutUsExpansion");
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
            <div className="AboutUs">
                <a name="aboutus" className="page-start-aboutus"></a>
                    <div id="aboutUsMain">
                        <h1>About Us</h1>
                        <br/>
                        <div className="aboutUs-blurb">
                            We are a group of students at Washington University in St. Louis with a passion
                            for the environment. 
                        </div>
                        <br/>
                        <h1>Team Members</h1>
                        <div className="aboutUs-blurb">
                            CEO: David Allen
                            <br/>
                            CFO and Director of Public Relations: Casey MacDonald
                            <br/> 
                        </div>
                    </div>
            </div>
        );
    }
}

export default AboutUs;
