import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import child_home from '../images_home/child_home.png';
import add from '../numbers/add-01.png';
import adbstract from '../numbers/adbstract-01.png';
import equal from '../numbers/equal-01.png';
import five from '../numbers/five-01.png';
import two from '../numbers/two-01.png';
import nine from '../numbers/nine-01.png';
import multip from '../numbers/multip-01.png';
import quationMark from '../numbers/quationMark-01.png';
import three from '../numbers/three-01.png';
import seven from '../numbers/seven-01.png';
import subtraction from '../numbers/subtraction-01.png';
import one from '../numbers/one-01.png';

import '../style.css';
function Home() {
    let navigate=useNavigate();
    return (
        <div className='container'style={{height:"100vh"}}>
            <div className='card shadow parent'>
                <div className='card col-6 bg-description description p-3 shadow'>
                <h3>Calculator game</h3>
                Welcome to our Mental Arithmetic Game! <br/>
                This game is designed to help young children sharpen their mental arithmetic skills in a fun and engaging way. <br/> 
                </div>
                <div className='alert alert-primary d-flex align-items-center col-5 alert-use' style={{fontSize:"14px"}} role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                    </svg>
                    <Link to='/infos' className='mx-2'>Click here</Link>
                    <span>if you want to know how the game works!</span>
                </div>
              
                <div>
                    <button onClick={()=>{navigate("/choose")}} className='btn-start button-74'>start</button>
                </div>
                <img className='add' src={add} alt='add'></img>
                <img className='adbstract' src={adbstract} alt='adbstract'></img>
                <img className='equal' src={equal} alt='equal'></img>
                <img className='five' src={five} alt='five'></img>
                <img className='two' src={two} alt='two'></img>
                <img className='nine' src={nine} alt='nine'></img>
                <img className='multip' src={multip} alt='multip'></img>
                <img className='quationMark' src={quationMark} alt='quationMark'></img>
                <img className='seven' src={seven} alt='seven'></img>
                <img className='three' src={three} alt='three'></img>
                <img className='subtraction' src={subtraction} alt='subtraction'></img>
                <img className='one' src={one} alt='one'></img>
                <img style={{width:"100%"}} src={child_home} alt='child_home'></img>
            </div>
            
        </div>
    )
}

export default Home;
