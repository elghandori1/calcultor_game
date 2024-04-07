import React from 'react'
import { Link } from "react-router-dom";
import thear from '../images_start/earth-02-01.png';
import child1 from '../images_start/chilld1-01.png';
import child2 from '../images_start/child2-01.png';
import child3 from '../images_start/child3-01.png';
import pencil from '../images_start/pencil-01.png';
import carpentry from '../images_start/carpentry-01.png';
import {GameDataContext} from '../App';

function Choose() {
    const { gameData, setGameData } = React.useContext(GameDataContext);
    const [number,setNumber]=React.useState();
    const [operation,setOperation]=React.useState();

    function send_data(){
        setGameData({ number: number, operation: operation });
    }
    return (
        <div className="container">
    
          <div className="card mt-1">
            <div className="d-flex justify-content-between align-items-center p-2">
              <h4 className="text-green">Start game</h4>
              <Link to="/">Home page</Link>
            </div>
          </div>
          
          <div className="col-12 d-flex mt-2">
    
            <div className="col-6 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center bg-white col-11 p-1 shadow">
                 <span className="mt-2" style={{fontSize:"20px"}}>Enter the value maximum :</span> 
                 <input onChange={(e)=>setNumber(e.target.value)} className="field mt-2"  type="number" /> 
            </div>
    
            <div className="col-11 bg-white p-2">
              <b className='text-success'>Choose the operation you want :</b>
              <div className="d-flex justify-content-between col-11 bg-white p-2">
                <button className="col-2 btn btn-success my-2" onClick={()=>setOperation('x')}>x</button>
                <button className="col-2 btn btn-success my-2" onClick={()=>setOperation('+')}>+</button>
                <button className="col-2 btn btn-success my-2" onClick={()=>setOperation('/')}>/</button>
                <button className="col-2 btn btn-success my-2" onClick={()=>setOperation('-')}>-</button>
                <button className="col-2 btn btn-success my-2" onClick={()=>setOperation('all')}>all</button>
              </div>
    
            </div>
    
            <div>
              <Link to='/start_game' onClick={send_data} className="btn-start_v2 button-74_v2">start now</Link>
            </div>
    
          </div>
    
    
          <div className="card shadow col-6 p-2 bg-description">
                  <b >Before you dive into the game, there are a few settings you need to configure:</b>
                  <ul>
                    <li>
                        Enter the maximum number you want to use in the arithmetic problems,
                        This allows you to control the difficulty level of the game.
                    </li>
                    <li>
                        and Choose the type of arithmetic operation you want to practice. 
                        You can select addition, subtraction, multiplication, division,or a combination of all four.
                        Simply click on the corresponding button to make your selection.
                    </li>
                    <li>
                         Once you've made these selections, press the 'Start' button to begin the game. 
                         Remember, the goal is to solve each problem as quickly as possible. 
                         The clock is ticking, so think fast!
                    </li>                   
                  </ul>
            </div>
          </div>

          <div className='edit_childs'>
            <img src={child1} alt='child1' className='child1'></img>
            <img src={child2} alt='child2' className='child2'></img>
            <img src={child3} alt='child3' className='child3'></img>
            <img src={pencil} alt='pencil' className='pencil'></img>
            <img src={carpentry} alt='carpentry' className='carpentry'></img>
            <img src={thear} style={{width:'100%'}} alt='eath'></img>
          </div>
         
        </div>
      );
}

export default Choose;