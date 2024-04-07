import React from 'react'
import { Link } from "react-router-dom";
function Infos() 
{
  return (
    <div className='container card mt-4'>
        <div className='mt-3'>
            <span className="d-flex justify-content-between align-items-center mb-1">
                 <h2 className="text-green">How it works</h2>
                 <Link to="/">Home page</Link>
            </span>
            <hr/>
        <ul>
          <li><b>Choose Your Operation:</b> <br/>
          At the start of the game, you can choose the type of arithmetic operation you want to practice
          - addition, subtraction, multiplication, division, or a mix of them all.</li>  
          <li className='mt-2'><b>Answer the Questions:</b> <br/>
          The game will present you with a series of arithmetic problems, like 2*4 or 3+3. 
          Your task is to enter the correct answer.</li>  
          <li className='mt-2'><b>Be careful:</b> <br/>
          You only have three chances. If you give the wrong answer three times, the game ends..</li>  
          <li className='mt-2'><b>Beat the Clock:</b> <br/>
          Each problem must be solved in less than 30 seconds. As you progress, the difficulty increases and the time you have
          to solve each problem decreases.</li>  
        </ul>
        </div>
    </div>
  )
}
export default Infos;