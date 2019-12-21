import React, {Component} from 'react';
import './App.css';
import Button from "./Button";


class App extends Component {
    onCommandMove = (cmd) => {
        fetch('/move', {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cmd})
        })
    };
    onCommandStop = (cmd) => {
        fetch('/stop', {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cmd})
        })
    };
    onCommandReturn = (cmd) => {
        fetch('/return')

    };
    script1 = (cmd) => {
        fetch('/script1')
    };
    render() {
        return (
            <div className="App">
                <Button title="Forward" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{flex: 1, marginRight: '10px'}}>
                        <Button title="Left" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                    </div>
                    <div style={{flex: 1}}>
                        <Button title="Right" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                    </div>
                </div>
                <Button title="Backward" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                <Button title="Up" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                <Button title="Down" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
                    <div style={{flex: 1, marginRight: '10px'}}>
                        <Button title="Open grip" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                    </div>
                    <div style={{flex: 1}}>
                        <Button title="Close grip" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{flex: 1, marginRight: '10px'}}>
                        <Button title="Handrot left" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                    </div>
                    <div style={{flex: 1}}>
                        <Button title="Handrot right" onPressed={this.onCommandMove} onReleased={this.onCommandStop} />
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{flex: 1, marginRight: '10px'}}>
                        <Button title="Return" onReleased={this.onCommandReturn} />
                    </div>
                    <div style={{flex: 1}}>
                        <Button title="Script 1" onReleased={this.script1} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
