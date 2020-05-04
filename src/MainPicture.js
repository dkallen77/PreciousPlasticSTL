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
          flipped: false
      }
    }

    RotateImgs = () => {
        if(this.state.flipped === false){
            this.setState({flipped:true});
            var shown = document.getElementById("shown-pic");
            var hidden = document.getElementById("hidden-pic");
            var rot = 0;
            var id = setInterval(frame, 5);
            function frame() {
                if (rot === 180) {
                    clearInterval(id);
                    var hiddenPic = hidden.src;
                    if(hiddenPic === join){  //Join
                        shown.src=collect;
                        shown.alt="Collect";
                    }
                    if(hiddenPic === collect){  //Collect
                        shown.src=recycle;
                        shown.alt = "Recycle";
                    }
                    if(hiddenPic === recycle){  //Recycle
                        shown.src=transform;
                        shown.alt="Transform";
                    }
                    if(hiddenPic === transform){  //Transform
                        shown.src=community;
                        shown.alt="Community";
                    }
                    if(hiddenPic === community){  //Community
                        shown.src=join;
                        shown.alt="Join"
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
            id = setInterval(frame, 5);
            function frame() {
                if (rot === 180) {
                    clearInterval(id);
                    var shownPic = shown.src;
                    if(shownPic === join){  //Join
                        hidden.src=collect;
                        hidden.alt="Collect";
                    }
                    if(shownPic === collect){  //Collect
                        hidden.src=recycle;
                        hidden.alt="Recycle";
                    }
                    if(shownPic === recycle){  //Recycle
                        hidden.src=transform;
                        hidden.alt="Transform";
                    }
                    if(shownPic === transform){  //Transform
                        hidden.src=community;
                        hidden.alt="Community";
                    }
                    if(shownPic === community){  //Community
                        hidden.src=join;
                        hidden.alt="Join";
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
