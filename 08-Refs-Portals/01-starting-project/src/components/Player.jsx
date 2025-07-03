import { useState, useRef } from 'react';

export default function Player() {
    const playerName = useRef();
    const [ enterPlayer, setEnterPlayer ] = useState(null);

    function handleClick() {
        setEnterPlayer(playerName.current.value);
        playerName.current.value = '';
    }
    return (
        <section id="player">
            <h2>Welcome {enterPlayer ?? 'unknown player'}</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}

/*
import { useState } from 'react';

export default function Player() {

    const [ enterPlayer, setEnterPlayer ] = useState('');
    const [ submit, setSubmit ] = useState(false);
    function handleChange(event) {
        setSubmit(false);
        setEnterPlayer(event.target.value);
    }
    function handleClick() {
        setSubmit(prevState => !prevState);
    }
    return (
        <section id="player">
            <h2>Welcome {submit ? enterPlayer : 'unknown player'}</h2>
            <p>
                <input type="text" onChange={handleChange} value={enterPlayer} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
*/
