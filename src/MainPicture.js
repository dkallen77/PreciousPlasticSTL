import React, { Component } from 'react';
import './MainPicture.css';
import join from './img/join2.png';
import collect from './img/collect2.png';
import recycle from './img/recycle2.png';
import transform from './img/transform2.png';
import community from './img/community2.png';

class MainPicture extends Component {
    constructor(props) {
      super(props);
      this.state={
          flipped: false,
          pic: 1
      }
    }

    RotateImgs = () => {
        if(this.state.flipped === false){
            this.setState({flipped:true});
            var shown = document.getElementById("shown-pic");
            var hidden = document.getElementById("hidden-pic");
            var rot = 0;
            var id = setInterval(frame.bind(this), 5);
            function frame() {
                if (rot === 180) {
                    clearInterval(id);
                    if(this.state.pic === 0){  //Join
                        this.setState({pic:1});
                        shown.src=collect;
                        shown.alt="Collect";
                        return;
                    }
                    if(this.state.pic === 1){  //Collect
                        this.setState({pic:2});
                        shown.src=recycle;
                        shown.alt = "Recycle";
                        return;
                    }
                    if(this.state.pic === 2){  //Recycle
                        this.setState({pic:3});
                        shown.src=transform;
                        shown.alt="Transform";
                        return;
                    }
                    if(this.state.pic === 3){  //Transform
                        this.setState({pic:4});
                        shown.src=community;
                        shown.alt="Community";
                        return;
                    }
                    if(this.state.pic === 4){  //Community
                        this.setState({pic:0});
                        shown.src=join;
                        shown.alt="Join";
                        return;
                    }
                    return;
                } else {
                        rot++;
                        var rotOp = 180 +rot;
                        shown.style.transform = 'rotate('+rot+'deg)';
                        hidden.style.transform = 'rotate('+rotOp+'deg)';
                }
            }
        }
        else{
            this.setState({flipped:false});
            shown = document.getElementById("shown-pic");
            hidden = document.getElementById("hidden-pic");
            rot = 0;
            id = setInterval(frame.bind(this), 5);
            function frame() {
                if (rot === 180) {
                    clearInterval(id);
                    if(this.state.pic === 0){  //Join
                        this.setState({pic:1});
                        hidden.src=collect;
                        hidden.alt="Collect";
                        return;
                    }
                    if(this.state.pic === 1){  //Collect
                        this.setState({pic:2});
                        hidden.src=recycle;
                        hidden.alt="Recycle";
                        return;
                    }
                    if(this.state.pic === 2){  //Recycle
                        this.setState({pic:3});
                        hidden.src=transform;
                        hidden.alt="Transform";
                        return;
                    }
                    if(this.state.pic === 3){  //Transform
                        this.setState({pic:4});
                        hidden.src=community;
                        hidden.alt="Community";
                        return;
                    }
                    if(this.state.pic === 4){  //Community
                        this.setState({pic:0});
                        hidden.src=join;
                        hidden.alt="Join";
                        return;
                    }
                    return;
                } else {
                    rot++;
                    var rotOp = 180 +rot;
                    shown.style.transform = 'rotate('+rotOp+'deg)';
                    hidden.style.transform = 'rotate('+rot+'deg)';
    
                }
            }

        }        
    }
  
    render(){
        return (
            <div className="box">
                <div className="MainPicture" id="MainPicture" onClick={this.RotateImgs}>
                    <div className="title">
                        Precious Plastic STL
                    </div>
                    <div className="title-media">
                        Precious Plastic STL
                    </div>
                        <img src={join} alt="Join" className="shown-pic" id="shown-pic"/>
                        <img src={collect} alt="Collect" className="hidden-pic" id="hidden-pic"/>
                </div>
            </div>
        );
    }
}

export default MainPicture;
