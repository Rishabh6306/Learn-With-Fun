import React from 'react'
import { Link } from 'react-router-dom'

function AllGames() {
  return (
    <div className='bg-[url(./src/Components/Games/mainBgc.png)] bg-center bg-cover grid grid-cols-1 md:grid-cols-2 gap-6 text-center p-3 md:p-10 text-white overflow-hidden '>
      <div className="p-5 border-2 border-sky-500 flex flex-col items-center rounded-lg">
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>Guess Number Game</h1>
        <p>In this game, you must guess a random number between a given range. To play, you first choose a range, such as 1 to 100. Then, you enter your guess in an input box. The game will then tell you if your guess is too high or too low. You continue guessing until you guess the correct number. <br />  This is a fun and engaging game that tests your logic and guessing skills.</p>
        <Link to="/guessGame" className='text-3xl text-white my-5 rounded-3xl py-3 px-10 bg-orange-400'>Play</Link>
      </div>

      <div className="p-5 border-2 border-sky-500 flex flex-col items-center rounded-lg">
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>Speed Typing Game</h1>
        <p>A typing game in which players must type a paragraph of text as quickly as possible. The game keeps track of typing speed and accuracy, and players can compare their scores to other players. They also can check that how many words they can type in a minutes. <br /> Now Improve your typing speed and accuracy with this fun and addictive game! </p>
        <Link to="/typingGame" className='text-3xl text-white my-5 rounded-3xl py-3 px-10 bg-orange-400'>Play</Link>
      </div>

      <div className="p-5 border-2 border-sky-500 flex flex-col items-center rounded-lg">
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>15Puzzle Game</h1>
        <p>15Puzzle, a captivating grid-based game, tests your mental agility as you strategically arrange numbers 1-15 in a 4x4 grid, enhancing problem-solving skills and spatial intelligence, making it a fun brain exercise. It's an engaging way to boost cognitive abilities and challenge your mind. <br />It is not only a game but also a problem solving skill.</p>
        <Link to="/15puzzle" className='text-3xl text-white my-5 rounded-3xl py-3 px-10 bg-orange-400'>Play</Link>
      </div>

      <div className="p-5 border-2 border-sky-500 flex flex-col items-center rounded-lg">
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>Bubble Game</h1>
        <p>In this game, the goal is to pop bubbles within a challenging 60-second time limit. Click on bubbles that match the 'hit number' to accumulate points and aim for victory at 200 points. If you click any box which does not match the 'hit number' that time your score decreased by 10.<br /> Enjoy a quick and enjoyable break from the daily routine while challenging your focus.</p>
        <Link to="/bubbleGame" className='text-3xl text-white my-5 rounded-3xl py-3 px-10 bg-orange-400'>Play</Link>
      </div>
    </div>
  )
}

export default AllGames;