import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState({
    session: 25 * 60 * 1000, break: 5 * 60 * 1000,
    pause: true, interval: null, onSession: true
  });
  const audio = document.getElementById("beep");

  useEffect(() => {
    // Update state when break length changed
    setTimer({
      session: timer.session, break: breakLength * 60 * 1000,
      pause: timer.pause, interval: timer.interval, onSession: timer.onSession
    });
  }, [breakLength]);

  useEffect(() => {
    // Update state when session length changed
    setTimer({
      session: sessionLength * 60 * 1000, break: timer.break,
      pause: timer.pause, interval: timer.interval, onSession: timer.onSession
    });
  }, [sessionLength]);

  function playSound() {
    // Play audio
    var isPlaying = !audio.paused;
    if (!isPlaying) {
      audio.play();
    }
  }

  function pauseSound() {
    // Rewind audio and pause
    var isPlaying = !audio.paused;

    if (isPlaying) {
      audio.currentTime = 0;
      audio.pause();
    }
  }

  function startTimer() {
    let timerObj = { ...timer }
    let start = Date.now();
    let interval = setInterval(function () {
      let delta = Date.now() - start;
      // If session should play before

      if (timerObj.onSession) {
        // If session finished
        if (timerObj.session - delta < 0) {
          timerObj = {
            session: 0, break: timerObj.break,
            pause: false, interval: interval, onSession: false
          };
          setTimer(timerObj);
        } else {
          // if session not finished
          timerObj = {
            session: timerObj.session - delta, break: timerObj.break,
            pause: false, interval: interval, onSession: true
          };
          setTimer(timerObj);
          start = Date.now();
        }
      } else {
        // If break finished
        if (timerObj.break - delta < 0) {
          timerObj = {
            session: sessionLength * 60 * 1000, break: breakLength * 60 * 1000,
            pause: false, interval: interval, onSession: true
          };
          setTimer(timerObj);
        } else {
          // if break not finished
          timerObj = {
            session: 0, break: timerObj.break - delta,
            pause: false, interval: interval, onSession: false
          };
          setTimer(timerObj);
          start = Date.now();
        };
      }
    }, 1);
  }

  function stopTimer() {
    // When counter should stop
    let time = { ...timer };
    clearInterval(timer.interval);
    time.interval = null;
    setTimer({ ...time });
  }


  function showMin() {
    // Convert time milisecond to mm:ss format
    let time = timer.onSession ? timer.session : timer.break;
    if (time < 1000) playSound();
    // No hour detection so when it reaches it should be handled manually
    if (time == 60 * 60 * 1000) return "60:00";
    let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((time % (1000 * 60)) / 1000);
    // Add 0 front to of the num if it is single diged
    min = min / 10 < 1 ? "0" + min : min;
    sec = sec / 10 < 1 ? "0" + sec : sec;
    // Be sure to 00
    min = min === 0 ? "00" : min;
    sec = sec === 0 ? "00" : sec;
    return "" + min + ":" + sec;
  }

  function increment(event) {
    // Increase related value between 2-60
    event.preventDefault();
    if (timer.pause) {
      if (event.target.parentNode.classList[0] == "break-length") {
        if (breakLength < 60) setBreakLength(breakLength + 1);
      } else {
        if (sessionLength < 60) setSessionLength(sessionLength + 1);
      }
    }
  }

  function decrement(event) {
    //  Decrease related value between 1-59
    event.preventDefault();
    if (timer.pause) {
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
          <p id="timer-label">{timer.onSession ? "Session" : "Break"}</p>
          <p id="session"><span id="time-left">{showMin()}</span></p>
        </div>
        <div className="button-wrapper">
          <a id="start_stop" onClick={() => {
            let pause = { ...timer };
            if (pause.pause) {
              startTimer();
              pause.pause = false;
            }
            else {
              stopTimer()
              pause.pause = true;
            };
            setTimer(pause);
          }}>Continue/Pause</a>
          <a id="reset" onClick={() => {
            // Reset everything to their initial state
            clearInterval(timer.interval);
            setBreakLength(5);
            setSessionLength(25);
            setTimer({
              session: 25 * 60 * 1000, break: 5 * 60 * 1000,
              pause: true, interval: null, onSession: true
            });
            pauseSound();
          }}>Restart</a>
        </div>
      </div>
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </main>
  );
}

export default App;
