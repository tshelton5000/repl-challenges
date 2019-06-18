import React from 'react';
import SevenOne from './components/SevenOne';
import SevenTwo from './components/SevenTwo';
import SevenThree from './components/SevenThree';
import SevenFour from './components/SevenFour';
import SevenFive from './components/SevenFive';
import SevenSix from './components/SevenSix';
import DayTwoComp from './components/DayTwoComp';
import ChallengeOne from './components/ChallengeOne';
import DayThreeComp from './components/DayThreeComp';

function App() {
  return (
    <div className="App">
      <SevenOne/><br/>
      <SevenTwo/><br/>
      <SevenThree/><br/>
      <SevenFour/><br/>
      <SevenFive/><br/>
      <SevenSix/><br/>
      <ChallengeOne/>
      <DayTwoComp/>
      <DayThreeComp/>
    </div>
  );
}

export default App;
