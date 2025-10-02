import React, { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);
  const addSingle = () => {
    const updateRun = runs + 1;
    setRuns(updateRun);
  };
  const addTwo = () => {
    const updateRun = runs + 2;
    setRuns(updateRun);
  };
  const addFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
    const totalFour = fours + 1;
    setFours(totalFour);
  };
  const addSix = () => {
    const updateRuns = runs + 6;
    setRuns(updateRuns);
    const totalSix = sixes + 1;
    setSixes(totalSix);
  };
  return (
    <div>
      <h1>Score Bord</h1>
      <h3>Score: {runs}</h3>
      <button onClick={addSingle}>Single </button>
      <button onClick={addTwo}>Two</button>
      <button onClick={addFour}>Four</button>
      <button onClick={addSix}>Six</button>
      <h5>Six: {sixes}</h5>
      <h5>Four: {fours}</h5>
      {runs > 50 && <p>Congratulation on your first Fifty.</p>}
    </div>
  );
};

export default Batsman;
