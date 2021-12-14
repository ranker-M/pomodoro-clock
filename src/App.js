import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [session, setSession] = useState(25 * 60 * 1000);
  const [pause, setPause] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("session length updated");
    setSession(sessionLength * 60 * 1000);
  }, [sessionLength]);

  useEffect(() => {
    console.log("pause:" + pause);
    if (!pause && !isActive) startTimer();
  }, [pause]);
  // useEffect(() => {
  //   console.log("pause:" + pause);
  //   if (!pause) setTimeout(() => {
  //     setSession(session - 1);
  //   }, 100);
  // }, [pause]);

  // useEffect(() => {
  //   if (!pause) setTimeout(() => {
  //     setSession(session - 1);
  //   }, 100);
  // }, [session])

  function startTimer() {
    var start = Date.now();
    const interval = setInterval(function () {
      var delta = Date.now() - start; // milliseconds elapsed since start
      //  output(Math.floor(delta / 1000)); in seconds
      // alternatively just show wall clock time:
      setSession(session - delta);
    }, 1000); // update about every second
  }

  function stopTimer() {

  }


  function showMin() {
    let num = Math.floor(session / 1000);
    let min = Math.floor(num / 60);
    let sec = num - (min * 60);
    sec = sec === 0 ? "00" : sec;
    return "" + min + ":" + sec;
  }

  function increment(event) {
    event.preventDefault();
    if (pause) {
      if (event.target.parentNode.classList[0] == "break-length") {
        if (breakLength < 60) setBreakLength(breakLength + 1);
      } else {
        if (sessionLength < 60) setSessionLength(sessionLength + 1);
      }
    }
  }

  function decrement(event) {
    event.preventDefault();
    if (pause) {
      if (event.target.parentNode.classList[0] == "break-length") {
        if (breakLength > 1) setBreakLength(breakLength - 1);
      } else {
        if (sessionLength > 1) setSessionLength(sessionLength - 1);
      }
    }
  }

  return (
    <main className="main">
      <div className="clock-wrapper">
        <div className="length-selection-box">
          <div className="break-length" key={"break"}>
            <p id="break-label">Break Length</p>
            <a id="break-increment" onClick={increment}>↑</a><span id="break-length">{breakLength}</span><a id="break-decrement" onClick={decrement}>↓</a>
          </div>
          <div className="session-length">
            <p id="session-label">Session Length</p>
            <a id="session-increment" onClick={increment}>↑</a>
            <span id="session-length">{sessionLength}</span><a id="session-decrement" onClick={decrement}>↓</a>
          </div>
        </div>
        <div className="session">
          <p id="timer-label">Session</p>
          <p id="session"><span id="time-left">{showMin()}</span></p>
        </div>
        <div className="button-wrapper">
          <a id="start_stop" onClick={() => {
            if (pause) {
              setPause(false);
            }
            if (!pause) setPause(true);
          }}>Continue/Pause</a>
          <a id="reset" onClick={() => {
            if (pause) setSession(sessionLength * 60 * 1000);
          }}>Restart</a>
        </div>
      </div>
    </main>
  );
}

export default App;
