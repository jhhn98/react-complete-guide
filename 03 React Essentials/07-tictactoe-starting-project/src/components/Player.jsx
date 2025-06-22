import { useState } from 'react';

export default function Player({initialName, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        //setIsEditing(!isEditing);
        setIsEditing((editing) => !editing); //상태 변경 시 이전의 상태값에 기반하여 변경한다면 이 함수 형태를 써야한다.
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        //btnCaption = 'Save';
    }
    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}