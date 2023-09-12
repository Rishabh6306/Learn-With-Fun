import React from 'react'
import { Link } from 'react-router-dom'

function AllGames() {
  return (
    <div className='bg-[url(./src/Components/Games/mainBgc.png)] bg-center bg-cover flex flex-wrap justify-around py-10 text-white h-screen overflow-hidden '>
      <div className="p-4 border-2 border-sky-500">
        <Link to="/guessGame" className='text-4xl'>Guess Number Game</Link>
        <p>In this game, you must guess a random number between a given range. To play, you first choose a range, such as 1 to 100. Then, you enter your guess in an input box. The game will then tell you if your guess is too high or too low. You continue guessing until you guess the correct number. <br />  This is a fun and engaging game that tests your logic and guessing skills.</p>
      </div>

      <div className="p-4 border-2 border-sky-500  ">
        <Link to="/guessGame" className='text-4xl'>Guess Number Game</Link>
        <p></p>
      </div>


      <div className=" p-4 border-2 border-sky-500  ">
        <Link to="/guessGame" className='text-4xl'>Guess Number Game</Link>
        <p></p>
      </div>
    </div>
  )
}

export default AllGames;