import React, { useEffect, useState } from 'react'
import {GameDataContext} from '../App';
import heartImage from '../heart-svgrepo-com.svg';
import imgearth from '../images/earthstargame-01.png';
import imgIndx from '../images/childeIndex-01.png';
import { Link } from 'react-router-dom';
function Startgame() {
  const { gameData } = React.useContext(GameDataContext);
  const [time,setTime]=useState(60);
  const [number1, setNumber1] = useState(Math.floor(Math.random()*gameData.number));
  const [number2, setNumber2] = useState(Math.floor(Math.random()*gameData.number));
  const [operation, setOperation] = useState(gameData.operation);
  const [response,setResponse]=useState(0);
  const [score,setScore]=useState(0);
  const [rslt,setRslt]=useState(0);

  const generateImages = (num) => {
    const images = [];
    for (let i = 0; i < num; i++) {
      images.push(<img key={i} src={heartImage}  alt='hear'  width="30px" />);
    }
    return images;
  };

  //--- timer
  useEffect(() => {
    if(time > 0) {
        const timer = setTimeout(() => {
            setTime(time - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }
}, [time]);

const minutes = Math.floor(time / 60);
const seconds = time % 60;

//-------start game
const generateNumbers = () => {
  setNumber1(Math.floor(Math.random()*gameData.number));
  setNumber2(Math.floor(Math.random()*gameData.number));
  
  if(gameData.operation === 'all') {
    const operations = ['+', '-', '*', '/'];
    setOperation(operations[Math.floor(Math.random() * operations.length)]);
  }
}


useEffect(() => {
  if (gameData.operation === 'all') {
    generateNumbers();
  }
}, [gameData.operation]);

const startGame = () => {
  let result;
  switch(operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      if(number1>number2)
          result = number1 - number2;
      else
          result = number2 - number1;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = 0;
      break;
    default:
      result = null;
  }

  if(result === Number(response)) {
    setScore(score+1);
    generateNumbers();
  }
}

  return (
    <div className='containter'>
          <div className="card mt-1">
            <div className="d-flex justify-content-between align-items-center p-2">
              <h4 className="text-green">Start game</h4>
              <Link to="/choose">Previous page</Link>
            </div>
          </div>
          <div className='d-flex  justify-content-between '>

          <div className='card shadow col-3 mt-3 part_right p-1'>
            <div className='d-flex justify-content-around align-items-center mt-1'>
               <div>
               <b className='fs-5'>{`0${minutes}:${seconds}`}</b>
            </div>
            <div className='hears'>
            {generateImages(3).map((heart, index) => (
          <React.Fragment key={index}>
            {heart}
          </React.Fragment>
            ))}
            </div>
            </div>
            <ul className='mt-1'>
            <li>Attention to the time (1min) </li>
            <li>You have 3 attempts</li>
            </ul>
            <div className='mt-2 card d-flex p-3'>
              <span className='d-flex justify-content-around'>
                <span className='text-success'>Your score :</span>
                <b className='fs-5 nbr_score px-3 rounded text-light'>{score}</b>
              </span> 
            </div>
          </div>

          <div className='mt-5 display_number' >
            <input type='text' value={
              (operation === '-' && Number(number1) > Number(number2)) ?
              (number1 + operation + number2) :
              (number2 + operation + number1)
              } readOnly className='input_display_number'></input>
          </div>

          
          <div className='card shadow col-3 mt-3 p-3'>
            <p> <span>The maximum number is : </span><b className='text-danger'>{gameData.number}</b></p>
            <p> <span>The operation chosen is : </span><b className='text-danger'>{gameData.operation}</b></p>
          </div>

          </div>

          <div className='bg_start'>

            <div className='answer card col-3 p-3 shadow'>
              <h5 className='text-success'>Enter the correct answer</h5>
              <div className='d-flex  flex-column justify-content-center align-items-center mt-2'>
              <input type='number' onChange={(e)=>setResponse(e.target.value)} className='form-control form-answer'/>
              <button className='btn btn-success col-8 mt-3' onClick={startGame}>valid</button>
              </div>
            </div>
            
           <div className='child_indx'>
              <img width='350' src={imgIndx} alt='eath'></img>
          </div>

          <div className='bg_eath'>
            <img width='100%' src={imgearth} alt='eath'></img>
          </div>
          </div>

         
    </div>
  )
}
export default Startgame