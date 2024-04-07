import React from 'react'
import {GameDataContext} from '../App';
function Startgame() {
  const { gameData } = React.useContext(GameDataContext);
  return (
    <div className='containter'>
      <h2>start game</h2>
      <b>{gameData.number}</b> <br/>
      <b>{gameData.operation}</b>
    </div>
  )
}
export default Startgame