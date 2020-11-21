import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';


export class Chorus extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            frequency: this.props.synth.chorus.freqency, 
            delayTime: this.props.synth.chorus.delayTime,
            depth: this.props.synth.chorus.depth * 100,
            isOn: this.props.synth.chain.includes(this.props.synth.chorus)
        };

        this.adjust = this.adjust.bind(this);
        this.mute = this.mute.bind(this);
    }


    mute() {
        this.props.synth.toggleChain(this.props.synth.chorus);
        this.setState({isOn: !this.state.isOn});
    }

    onOrOff() {
        if(this.state.isOn) {
            return "Off";
        } else {
            return "On";
        }
    }

    adjust(event) {
        switch(event.target.name) {
            case "frequency":
                this.props.synth.chorus.set({frequency: event.target.value});
                this.setState({frequency: event.target.value});
                break;
            case "delayTime":
                this.props.synth.chorus.set({delayTime: event.target.value / 1000});
                this.setState({delayTime: event.target.value});
                break;
            case "depth":
                this.props.synth.chorus.set({depth: event.target.value / 100});
                this.setState({depth: event.target.value});
                break;
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <h1>Chorus</h1>
                <h1>Frequency</h1>
                <input name="frequency" type='range' min='0' max='20000' step='1' value={this.state.frequency} onChange={this.adjust}></input>
                <p>{this.state.freqency} ms</p>
                <h1>Delay Time</h1>
                <input name="delayTime" type='range' min='0' max='1000' step='1' value={this.state.delayTime} onChange={this.adjust}></input>
                <p>{this.state.delayTime} ms</p>
                <h1>Depth</h1>
                <input name="depth" type='range' min='0' max='100' step='1' value={this.state.depth} onChange={this.adjust}></input>
                <p>{this.state.depth} % wet</p>
                <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
            </div>
        </div>);
    }

}