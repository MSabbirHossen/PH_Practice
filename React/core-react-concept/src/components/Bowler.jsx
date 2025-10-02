import React, { useState } from "react";

const Bowler = () => {
  const [bowl, setBowl] = useState(6);
  const handleBowling = () => {
    const remainingBowl = bowl - 1;
    setBowl(remainingBowl);
  };
  return (
    <div>
      <h2>Bowling</h2>
      <p>Over:</p>
      <p>Remaining bowl: {bowl}</p>
      <button onClick={handleBowling}>New Bowl</button>
      {/* {(bowl = 0 && alert("The over finish, start new over."))} */}
    </div>
  );
};

export default Bowler;
