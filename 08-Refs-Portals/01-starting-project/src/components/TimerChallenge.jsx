import {useState, useRef, Fragment} from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [ timerStarted, setTimerStarted ] = useState(false);
    const [ timerExpired, setTimerExpired ] = useState(false);
    const [ timeRemaining, setTimeRemaining ] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }
    function handleStart() {
        clearTimeout(timer.current);
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemining => prevTimeRemining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <Fragment>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                {/*{timerExpired && <p>You lost!</p>}*/}
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p><button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button></p>
                <p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Time is running...' : 'Timer inactive'}</p>
            </section>
        </Fragment>
    );
}