import React from "react";
import { OscillatorTest } from "./OscillatorTest.js";
import { AmpEnv } from "./AmpEnv.js";
import { FilterEnv } from "./FilterEnv.js"
import { Verb } from "./Verb.js";
import { Chorus } from "./Chorus.js";
import { Delay } from "./Delay.js";
import { Dist } from "./Dist.js";
import { Port } from "./Port.js";
import { BigBoySynth } from "./BigBoySynth.js";
import { BigBoyOptions } from "./BigBoyOptions.js";

import '../pages/stylesheets/SynthComponents.css';

export class TripleOsc extends React.Component {


    constructor(props) {

        super(props);
        this.synth = new BigBoySynth(new BigBoyOptions({}));
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);

    }

    handleKeyRelease(event) {
        this.synth.releaseNote(event);
    }


    handleKeyPress(event) {
        this.synth.playNote(event);
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyPress} onKeyUp={this.handleKeyRelease} className="synth-body">
                <OscillatorTest synth={this.synth.voice1} oscNum="1" mutedOnLoad={false} />
                <OscillatorTest synth={this.synth.voice2} oscNum="2" mutedOnLoad={true} />
                <OscillatorTest synth={this.synth.voice3} oscNum="3" mutedOnLoad={true} />
                <div className="amp-container">
                    <AmpEnv synth={this.synth.voices} />
                </div>
                <div className="fullwidth-break"></div>
                <div className="filter-container">
                    <FilterEnv synth={this.synth.voices} />
                </div>

                <div className="fx-container">
                    <p>REVERB</p>
                    <Verb synth={this.synth} parentState={this.state} />
                </div>
                <div className="fx-container">
                    <p>CHORUS</p>
                    <Chorus synth={this.synth} />
                </div>
                <div className="fx-container">
                    <p>DELAY</p>
                    <Delay synth={this.synth} />
                </div>
                <div className="fx-container">
                    <p>DIST</p>
                    <Dist synth={this.synth} />
                </div>
                <Port synth={this.synth.voices} />
            </div>
        )
    }
}