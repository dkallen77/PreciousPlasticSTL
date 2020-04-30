import React, { Component } from 'react';
import './MainPicture.css';
import join from './img/join.png';
import collect from './img/collect.png';
import recycle from './img/recycle.png';
import transform from './img/transform.png';
import community from './img/community.png';

class MainPicture extends Component {
    constructor(props) {
      super(props);
      this.state={
          flipped: false
      }
    }

    // RotateImgsOpps(){
    //     var shown = document.getElementById("shown-pic");
    //     var hidden = document.getElementById("hidden-pic");
    //     var rot = 0;
    //     var id = setInterval(frame, 5);
    //     function frame() {
    //         if (rot == 180) {
    //             clearInterval(id);
    //             // hidden.style.bottom = '20px';
    //             var shownPic = shown.src;
    //             if(shownPic == {join}){
    //                 hidden.src={recycle};
    //             }
    //             if(shownPic == {recycle}){
    //                 hidden.src={transform};
    //             }
    //             if(shownPic == {transform}){
    //                 hidden.src={community};
    //             }
    //             if(shownPic == {community}){
    //                 hidden.src={join};
    //             }
    //             return;
    //         } else {
    //             rot++;
    //             var rotOp = 180 +rot;
    //             shown.style.transform = 'rotate('+rotOp+'deg)';
    //             hidden.style.transform = 'rotate('+rot+'deg)';

    //         }
    //     }
    // }

    RotateImgs = () => {
        if(this.state.flipped == false){
            this.setState({flipped:true});
            var shown = document.getElementById("shown-pic");
            var hidden = document.getElementById("hidden-pic");
            var rot = 0;
            var id = setInterval(frame, 5);
            function frame() {
                if (rot == 180) {
                    clearInterval(id);
                    var hiddenPic = hidden.src;
                    if(hiddenPic == "http://localhost:3000/static/media/join.efa53dca.png"){  //Join
                        shown.src=collect;
                        shown.alt="Collect";
                    }
                    if(hiddenPic == "http://localhost:3000/static/media/collect.0cc008bd.png"){  //Collect
                        shown.src=recycle;
                        shown.alt = "Recycle";
                    }
                    if(hiddenPic == "http://localhost:3000/static/media/recycle.b9ed3adf.png"){  //Recycle
                        shown.src=transform;
                        shown.alt="Transform";
                    }
                    if(hiddenPic == "http://localhost:3000/static/media/transform.67a8a61a.png"){  //Transform
                        shown.src=community;
                        shown.alt="Community";
                    }
                    if(hiddenPic == "http://localhost:3000/static/media/community.0062cb7a.png"){  //Community
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
            var shown = document.getElementById("shown-pic");
            var hidden = document.getElementById("hidden-pic");
            var rot = 0;
            var id = setInterval(frame, 5);
            function frame() {
                if (rot == 180) {
                    clearInterval(id);
                    var shownPic = shown.src;
                    if(shownPic == "http://localhost:3000/static/media/join.efa53dca.png"){  //Join
                        hidden.src=collect;
                        hidden.alt="Collect";
                    }
                    if(shownPic == "http://localhost:3000/static/media/collect.0cc008bd.png"){  //Collect
                        hidden.src=recycle;
                        hidden.alt="Recycle";
                    }
                    if(shownPic == "http://localhost:3000/static/media/recycle.b9ed3adf.png"){  //Recycle
                        hidden.src=transform;
                        hidden.alt="Transform";
                    }
                    if(shownPic == "http://localhost:3000/static/media/transform.67a8a61a.png"){  //Transform
                        hidden.src=community;
                        hidden.alt="Community";
                    }
                    if(shownPic == "http://localhost:3000/static/media/community.0062cb7a.png"){  //Community
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
            <div className="MainPicture" onClick={this.RotateImgs}>
            <img src={join} alt="Join" className="shown-pic" id="shown-pic"/>
            <img src={collect} alr="Collect" className="hidden-pic" id="hidden-pic"/>
            </div>

        );
    }
}

export default MainPicture;
