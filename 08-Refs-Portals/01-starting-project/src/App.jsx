import { Fragment } from "react";
import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
    return (
        <Fragment>
            <Player />
            <div id="challenges">
                <TimerChallenge title="Easy" targetTime={1} />
                <TimerChallenge title="Not Easy" targetTime={5} />
                <TimerChallenge title="Getting Tough" targetTime={10} />
                <TimerChallenge title="Pros Only" targetTime={15} />
            </div>
        </Fragment>
    );
}

export default App;
