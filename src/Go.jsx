
import React, { useState } from 'react'

function Go() {
  const [numberToGuess] = useState(Math.floor(Math.random()*11));
  const [guess, setGuess] = useState('');
  const [message , setMessage] = useState('Guess');

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };
  const checkGuess = () => {
    const userGuess = parseInt(guess,10);
    if (isNaN(userGuess)) {
        setMessage('please enter a valid number');
    } else if (userGuess < 0 || userGuess > 10) { 
      setMessage('guess a number from 0-10');
    } else if (userGuess === numberToGuess) {
      setMessage('Congratulations');
    } else{
      setMessage('Try Again');
    }
  }

  return (
    <div className=' h-[100vh]  grid justify-center items-center'>
      <div className=' h-[30vh] w-[30vw] bg-[green] grid grid-rows-4 '>
        <div className=' grid justify-center items-center text-[20px] font-semibold text-[black]'>Guess my number from 0-10</div>
        <div className='  grid justify-center items-center'><input type="number" onChange={handleInputChange} value={guess} className=' h-[6vh] w-[20vw]'  /></div>
        <div className='  grid justify-center items-center font-bold'><h1>{message}</h1></div>
        <div className=' grid justify-center items-center '><button onClick={checkGuess} className=' h-[6vh] w-[10vw] bg-[red] font-bold'>Play</button></div>
      </div>
    </div>
  )
}

export default Go