var bgColor="#0FC0FC";
var drumColor="#7B1DAF";

  class Bank1 extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
      
      if(this.props.state.power)
      {
        var btnId=e.target.id;
        var instrument=document.getElementById(btnId).childNodes;
        var temp=bgColor;
        bgColor=drumColor;
        drumColor=temp;
        
        this.props.changeCurAudio(instrument[0]);
        instrument[0].play();
        $(document).ready(function(){
          $("#display").html(instrument[0].parentNode.id);
            $("html").css('background-color',bgColor);
            $("body").css('background-color',bgColor);
            $("#root").css('background-color',bgColor);
            $("#drum-machine").css('background-color',drumColor);
            $(".drum-pad").css('background-color',bgColor);
            $(".drum-pad").css('color',drumColor);
        });
        }
    }
    render(){
        return(
            <div id="bank">
                <div id="buttons">
                <div className="row">
                <button id="Heater 1" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>Q</button>
                <button id="Heater 2" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>W</button>
                <button id="Heater 3" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>E</button>
                </div>
                <div className="row">
                <button id="Heater 4" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>A</button>
                <button id="Clap" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>S</button>
                <button id="Open HH" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>D</button>
                </div>
                <div className="row">
                <button id="Kick n' Hat" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>Z</button>
                <button id="Kick" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>X</button>
                <button id="Closed HH" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>C</button>
                </div>
                </div>
                <div id="switches">

                </div>
            </div>
        );
    };
}
class Bank2 extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
      
      if(this.props.state.power)
      {
        var btnId=e.target.id;
        var instrument=document.getElementById(btnId).childNodes;
        var temp=bgColor;
        bgColor=drumColor;
        drumColor=temp;
        this.props.changeCurAudio(instrument[0]);
        instrument[0].play();
        $(document).ready(function(){
          $("#display").html(instrument[0].parentNode.id);
            $("html").css('background-color',bgColor);
            $("body").css('background-color',bgColor);
            $("#root").css('background-color',bgColor);
            $("#drum-machine").css('background-color',drumColor);
            $(".drum-pad").css('background-color',bgColor);
            $(".drum-pad").css('color',drumColor);
        });
        }
    }
    render(){
        return(
            <div id="bank">
                <div id="buttons">
                <div className="row">
                <button id="Chord 1" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" className="clip" id="Q"></audio>Q</button>
                <button id="Chord 2" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" className="clip" id="W"></audio>W</button>
                <button id="Chord 3" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" className="clip" id="E"></audio>E</button>
                </div>
                <div className="row">
                <button id="Shaker" className="drum-pad " onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" className="clip" id="A"></audio>A</button>
                <button id="Open HH" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" className="clip" id="S"></audio>S</button>
                <button id="Closed HH" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" className="clip" id="D"></audio>D</button>
                </div>
                <div className="row">
                <button id="Punchy Kick" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" className="clip" id="Z"></audio>Z</button>
                <button id="Side Stick" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" className="clip" id="X"></audio>X</button>
                <button id="Snare" className="drum-pad" onClick={this.handleClick}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="C"></audio>C</button>
                </div>
                </div>
                <div id="switches">
                    
                </div>
            </div>
        );
    };
}
class Switches extends React.Component{
  constructor(props){
    super(props);
    this.flipPow=this.flipPow.bind(this);
    this.flipBank=this.flipBank.bind(this);
  }
  flipPow(){
    this.props.changePState();
    $(document).ready(function(){
        
        var elem=document.querySelector("#power");
        var style=getComputedStyle(elem);
        var flexdir=style.flexDirection;
        var onoffelem=document.querySelector("#p-on-off");
        if(onoffelem.innerHTML=="ON")
        {
          $("#p-on-off").html("OFF");
          $("#p-on-off").css('color','#333333');
        }
        else if(onoffelem.innerHTML=="OFF")
        {
          $("#p-on-off").html("ON");
          $("#p-on-off").css('color','#0FC0FC');
        }
        
        if(flexdir=='row')
        $('#power').css('flex-direction','row-reverse');
        else if(flexdir=='row-reverse')
        $('#power').css('flex-direction','row');  
    });
    
  }
  flipBank(){
    
    this.props.changeBState();
    setTimeout(() => {
      var elem=document.getElementById("display");
      if(this.props.state.bank==2){
        elem.innerHTML="Smooth Piano Kit";
        }
      else{
          elem.innerHTML="Heater Kit";
        }
    }, 100);
    
    $(document).ready(function(){
      
      $("html").css('background-color','#0FC0FC');
      $("body").css('background-color','#0FC0FC');
      $("#root").css('background-color','#0FC0FC');
      $("#drum-machine").css('background-color','#7B1DAF');
        var elem=document.querySelector("#bank-switch");
        var style=getComputedStyle(elem);
        var flexdir=style.flexDirection;
        var onoffelem=document.querySelector("#b-on-off");
        if(onoffelem.innerHTML=="Bank-1")
        $("#b-on-off").html("Bank-2");
        else if(onoffelem.innerHTML=="Bank-2")
        $("#b-on-off").html("Bank-1");
        
        if(flexdir=='row')
        $('#bank-switch').css('flex-direction','row-reverse');
        else if(flexdir=='row-reverse')
        $('#bank-switch').css('flex-direction','row');  
    });
  }
  render(){
    return(
      <div id="switches">
        <div id="power" >
          <div id="p-on-off">ON</div><div onClick={this.flipPow} id="switch1" ></div>
        </div>
        <p id="display">Heater Kit</p>
        <div id="bank-switch">
        <div id="b-on-off">Bank-1</div><div onClick={this.flipBank} id="switch2" ></div>
        </div>
      </div>
    );
  };
}

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bank:1,
            power:true,
            curAudio:''
        }

        this.changePState=this.changePState.bind(this);
        this.changeBState=this.changeBState.bind(this);

        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.changeCurAudio=this.changeCurAudio.bind(this);
    }
    changeCurAudio(audioElem){
      if(this.state.curAudio!=''){
      this.state.curAudio.pause();
      this.state.curAudio.currentTime=0;
      }
      this.setState({curAudio:audioElem})
    }
    changePState(){
      if(this.state.power)
      this.setState({power:false});
      else 
      this.setState({power:true});
    }
    changeBState(){
      if(this.state.bank==1)
      this.setState({bank:2});
      else 
      this.setState({bank:1});
    }
    handleKeyPress(e){
        if(this.state.power)  
        {
          
          var key=e.keyCode;
          var keyTrigger=String.fromCharCode(key);
          var audioElem=document.getElementById(keyTrigger);
          
          this.changeCurAudio(audioElem);
          audioElem.play();
          

          var temp=bgColor;
          bgColor=drumColor;
          drumColor=temp;

          $(document).ready(function(){
            $("#display").html(audioElem.parentNode.id);
            $("html").css('background-color',bgColor);
            $("body").css('background-color',bgColor);
            $("#root").css('background-color',bgColor);
            $("#drum-machine").css('background-color',drumColor);
            $(".drum-pad").css('background-color',bgColor);
            $(".drum-pad").css('color',drumColor);
            
        });
        
        }
  }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  
    render(){
        

        if(this.state.bank==1)
        return(
            <div id="drum-machine">
                <div id="name">Drum Machine</div>
                <Bank1 changeCurAudio={this.changeCurAudio} changePState={this.changePState} changeBState={this.changeBState} state={this.state}/>
                <Switches changeCurAudio={this.changeCurAudio} changePState={this.changePState} changeBState={this.changeBState} state={this.state}/>
            </div>
        );
        else{
          
        return(
            <div id="drum-machine">
                <div id="name">Drum Machine</div>
                <Bank2 changeCurAudio={this.changeCurAudio} changePState={this.changePState} changeBState={this.changeBState} state={this.state}/>
                <Switches changeCurAudio={this.changeCurAudio} changePState={this.changePState} changeBState={this.changeBState} state={this.state}/>
            </div>
        );
        }
    };
};
ReactDOM.render(
    <DrumMachine/>,
    document.getElementById("root")
);
