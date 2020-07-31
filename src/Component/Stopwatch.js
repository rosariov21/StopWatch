import React, {Component} from 'react';


class Stopwatch extends Component {
    constructor() {
      super()
      this.state = {
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        timeout: []
      }
    }
    startTime = () => {
      this.setState({
        timeout: this.timer()
      })
    }
    stopTime = () => {
        clearInterval(this.state.timeout)
    }
    resetTime = () => {
        this.setState({
          milliseconds: 0,
          seconds: 0,
          minutes: 0
        })
    }
    timer = () => {
      let timer = setInterval(() => {
        this.setState(state => {
          return { milliseconds: state.milliseconds + 1}
        });
        if (this.state.milliseconds > 9) {
          this.setState(state => {
            return {
              milliseconds: state.milliseconds = 0,
              seconds: state.seconds + 1
            }
          })
        }
        if (this.state.seconds > 59) {
          this.setState(state => {
            return {
              minutes: state.minutes + 1,
              seconds: 0
            }
          })
        }
      }, 100);
      return timer
    }
    render() {
      return (
        <div className='stopwatch'>
          Stopwatch<br/><br/>
          {this.state.minutes} : {this.state.seconds} : {this.state.milliseconds}
          <div className='buttons'>
            <button onClick={this.startTime}>Start</button>
            <button onClick={this.stopTime}>Stop</button>
            <button onClick={this.resetTime}>Reset</button>
          </div>
        </div>
      );
    }
  }

  export default Stopwatch;