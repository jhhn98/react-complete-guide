import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName }) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        //상태 변경 시 이전의 상태값에 기반하여 변경한다면 이 함수 형태를 써야한다. 이유는 가장 최신의 상태값을 반환하기 때문.
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}