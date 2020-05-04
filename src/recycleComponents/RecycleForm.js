import React, { Component } from 'react';
import './RecycleForm.css'

class RecycleForm extends Component {


    render() {
        return(
            //html goes here
            <form id="expansionButon" onSubmit={this.getLocation}>
                <h1>Is today a good day to Recycle?</h1>
                <button type="submit" id="locationButton">Check Weather Near Me</button>
            </form>
        );
    }


    getLocation = (event) => {
        event.preventDefault();
        var originalThis = this;
        var getCoords = new XMLHttpRequest();

        getCoords.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var response = JSON.parse(this.responseText);
                console.log(response.loc);
                originalThis.props.onSubmit(response.loc);
            } 
            else if (this.readyState === 4) {
                console.log(this.responseText);
            }
        };

        getCoords.open("GET", "https://ipinfo.io/?token=647b33ff0d523e", true);
        getCoords.send();
    }

}

export default RecycleForm;