import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, start: false}

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  startTimer = () => {
    const {start} = this.state
    if (!start) {
      this.timer = setInterval(this.startTime, 1000)
    }
  }

  startTime = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
      start: true,
    }))
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({start: false})
  }

  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({time: 0, start: false})
  }

  renderMin = () => {
    const {time} = this.state
    const updateMin = Math.floor(time / 60)
    return updateMin
  }

  renderSec = () => {
    const {time} = this.state
    const updateSec = time % 60
    return updateSec
  }

  render() {
    const {start} = this.state
    const min = this.renderMin()
    const sec = this.renderSec()
    const minutes = min > 9 ? `${min}` : `0${min}`
    const seconds = sec > 9 ? `${sec}` : `0${sec}`
    return (
      <div className="mainContainer">
        <h1 className="heading">Stopwatch</h1>
        <div className="subContainer">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1 className="timer">Timer</h1>
          </div>
          <h1 className="time">{`${minutes}:${seconds}`}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button start-btn"
              onClick={this.startTimer}
              disabled={start}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-btn"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-btn"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
