/* eslint-disable default-case */
import React from "react";

export class FilterEnv extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cutoff: 0,
            attack: 0,
            decay: 0,
            sustain: 0,
            release: 0
        }

        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {
        
        switch(event.target.name) {
            case "attack":
                // this.props.synth.forEach(elm => {
                //     elm.set({envelope:
                //         {attack: event.target.value / 1000}
                //     });
                // });
                this.props.env.set({attack: event.target.value});
                this.setState({attack: event.target.value});
                break;
            case "decay":
                // this.props.synth.forEach(elm => {
                //     elm.set({envelope:
                //         {decay: event.target.value / 1000}
                //     });
                // });                
                this.setState({decay: event.target.value});
                break;
            case "sustain":
                // this.props.synth.forEach(elm => {
                //     elm.set({envelope:
                //         {sustain: event.target.value / 1000}
                //     });
                // });                
                this.setState({sustain: event.target.value});
                break;
            case "release":
                // this.props.synth.forEach(elm => {
                //     elm.set({envelope:
                //         {release: event.target.value / 1000}
                //     });
                // });                
                this.setState({release: event.target.value});
                break;
            case "cutoff":
                // this.props.synth.forEach(elm => {
                //     elm.set({
                //         filter: {
                //             frequency: event.target.value
                //         }
                //     });
                // })
                this.props.filter.set({frequency: event.target.value});
                this.setState({cutoff: event.target.value});
                break;
        }
    }

    render() {
        return (
        <div className='container'>
            <p>CUTOFF</p>
            <input onChange={this.adjust} name='cutoff' type='range' min='0' max='20000' step='1' value={this.state.cutoff}></input>
            <p>ATTACK</p>
            <input onChange={this.adjust} name='attack' type='range' min='0' max='1000' step='1' value={this.state.attack}></input>
            <p>DECAY</p>
            <input onChange={this.adjust} name='decay' type='range' min='0' max='1000' step='1' value={this.state.decay}></input>
            <p>SUSTAIN</p>
            <input onChange={this.adjust} name='sustain' type='range' min='0' max='1000' step='1' value={this.state.sustain}></input>
            <p>RELEASE</p>
            <input onChange={this.adjust} name='release' type='range' min='0' max='1000' step='1' value={this.state.release}></input>      
        </div>
        )
    }
}