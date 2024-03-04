import './App.css'
import { useState } from 'react';
import learners from './data/learners.data.mjs';
import Learner from './components/Learner';

function App() {
  const [learnersData, setLearnersData] = useState({ learners: learners });

  const learnerCards = learnersData.learners.map((learner) => {
    return <Learner key={learner.name} learner={learner} />;
  });
  return (
    <>
      <h1>Learners information</h1>
      <div className="learner-container">
        {learnerCards}
      </div>
    </>
  )
}

export default App
