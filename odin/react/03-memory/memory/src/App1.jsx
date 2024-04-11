import { useState } from "react";
import Header from "./components/Header.jsx";
import CardGrid from "./components/CardGrid.jsx";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(true);

  const endCurrentStage = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setReset(true);
  };

  const incrementScore = () => {
    setScore(() => score + 1);
    setReset(false);
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardGrid
        reset={reset}
        endCurrentStage={endCurrentStage}
        incrementScore={incrementScore}
      />
    </div>
  );
};

export default App;
