import React from 'react';
import img_cover from "../images/cover.png";
import '../style.css';
function Home() {
    const [show,setShow]=React.useState('none');
    const handleShow = () => {
        setShow('block');
    };

    const handleClose = () => {
        setShow('none');
    };
    return (
        <div className='container'>
            <div className='card-parncipale rounded shadow'>

                <div className='mt-3 bg-menu rounded-end shadow-sm'>
                    <ul className='d-flex list-unstyled'>
                        <li className='mx-4 mt-3'>About</li>
                        <li className='mx-4 mt-3'>Score</li>
                        <li className='mx-4 mt-3'>Language</li>
                    </ul>
                </div>

                <div className='card-info col-4 rounded p-3'>
                    <h3 className='text-danger'>Calculator game</h3>
                    Welcome to our Mental Arithmetic Game!
                    This game is designed to help young children sharpen their mental arithmetic skills in a fun and engaging way.
                </div>
                {/* alert how work */}
                <div className='how-work rounded bg-white col-10 p-2 shadow' style={{display:show}}>
                    <div className='d-flex justify-content-between align-items-center mt-1'>
                        <h4 className='text-primary mx-3'>How it works</h4>
                        <button className='btn btn-danger mx-3' onClick={handleClose}>x</button>
                    </div>
                    <hr/>
                    <ul>
                        <li className='mt-2'><b>Choose Your Operation:</b><br />
                            At the start of the game, you can choose the type of arithmetic operation you want to practice
                            - addition, subtraction, multiplication, division, or a mix of them all.</li>
                        <li className='mt-3'><b>Answer the Questions:</b> <br />
                            The game will present you with a series of arithmetic problems, like 2*4 or 3+3.
                            Your task is to enter the correct answer.</li>
                        <li className='mt-3'><b>Be careful:</b> <br />
                            You only have three chances. If you give the wrong answer three times, the game ends..</li>
                        <li className='mt-3'><b>Beat the Clock:</b> <br />
                            Each problem must be solved in less than 30 seconds. As you progress, the difficulty increases and the time you have
                            to solve each problem decreases.</li>
                    </ul>
                </div>
                {/* end alert how work */}
                <div className='alert-infos alert d-flex align-items-center col-4' role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                    </svg>
                    <b className='mx-2 text-danger text-decoration-underline pointer-cursor' onClick={handleShow}>Click here</b>
                    <span>if you want to know how the game works!</span>
                </div>

                <div className='btn-start'>
                    <button className="button-29" role="button">start</button>
                </div>

                <img src={img_cover} alt='img' className='img_cover rounded' />
            </div>
        </div>
    )
}
export default Home;
