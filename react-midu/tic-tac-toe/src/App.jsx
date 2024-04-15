import { useEffect, useState } from 'react';

import './App.css';
import confetti from 'canvas-confetti';
import { Square } from './Components/Square.jsx';
import { checkWinnerFrom, checkEndGame } from './storage/board.js';
import { TURNS } from './constants.js';
import { saveGameStorage, resetGameStorage } from './storage/storage.js';

function App() {
  const [board, setboard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board'); //Es lento por eso va en esta parte, leyendolo una vez en vez de cada vez.
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setboard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };

  const updateBoard = (index) => {
    //si ya tiene algo
    if (board[index] || winner) return;
    //actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setboard(newBoard);
    //cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar aquí la partida
    saveGameStorage({
      board: newBoard,
      turn: newTurn,
    });
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };
  // useEffect(()=>{
  //    //guardar aquí la partida
  //   //  saveGameStorage({
  //   //   board: newBoard,
  //   //   turn: newTurn,
  //   // }); Asi se ejecutaria esto cuando cambia de turno o cambia el board.
  // },[turn, board])//Se ejecuta cada vez que cambia -->[] las dependencias de aquí, si esta vacio no se ejecuta

  return (
    <main className="board">
      <h1>Tic Tac Toe </h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? 'Empate' : 'Ganó'}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo </button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
