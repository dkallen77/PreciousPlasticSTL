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
                        <div id="form">
                            <RecycleForm onSubmit={this.weather}/>
                        </div>
                        <div id="weatherInfo">
                            <h1>Seems like a great day to Recycle!</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Temperature (<span>&#176;</span>F) is:</td>
                                        <td>Feels-like (<span>&#176;</span>F) is:</td>
                                        <td>Description:</td>
                                    </tr>
                                    <tr>
                                        <td id="temperature"></td>
                                        <td id="feelsLike"></td>
                                        <td id="description"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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

    weather = (location) => {
        var postTodoRequest = new XMLHttpRequest();

        postTodoRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var response = JSON.parse(this.responseText);
                console.log(response);
                var temp = response.main.temp;
                var feels = response.main.feels_like;
                var description = response.weather[0].description;
                document.getElementById("temperature").innerText = temp;
                document.getElementById("feelsLike").innerText = feels;
                document.getElementById("description").innerText = description;
                document.getElementById("form").style.display = "none";
                document.getElementById("weatherInfo").style.display = "block";
            } 
            else if (this.readyState === 4) {
                console.log(this.responseText);
            }
        };

        var latlong = location.split(",")

        var URL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latlong[0] + "&lon=" + latlong[1];
        URL += "&units=imperial&appid=3e2b67030de0a8889e8fc5a17aac4aad";

        postTodoRequest.open("GET", URL, true);
        postTodoRequest.send();
    }
}

export default Recycle;