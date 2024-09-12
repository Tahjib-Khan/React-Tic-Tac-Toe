import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    setPlayerName(event.target.value) //This will set the Player Name to the value we enter
  }

  let editablePlayerName = <span className="player-name"> {playerName} </span>
  let btnCaption = "Edit"

  if (isEditing === true) {
    editablePlayerName = (
      <input
        type="text"
        value={playerName}
        required
        onChange={handleChange}></input>
    )
    btnCaption = "Save"
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  )
}
